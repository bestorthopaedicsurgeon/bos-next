import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from "@/lib/prisma";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const doctorId = parseInt(id);

        if (isNaN(doctorId)) {
            return NextResponse.json(
                { success: false, error: "Invalid doctor ID" },
                { status: 400 }
            );
        }

        // Fetch all reviews for this doctor with user details
        const reviews = await prisma.doctorReview.findMany({
            where: { doctorId },
            include: {
                user: {
                    select: {
                        name: true,
                        image: true,
                        email: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc' // Show newest reviews first
            }
        });

        let newReviews = reviews.map(review => {
            return {
                ...review,
                averageRating: parseFloat(((review.professionalism + review.punctuality + review.helpfulness + review.knowledge) / 4).toFixed(1))
            }
        });

        // Calculate average ratings
        const totalReviews = reviews.length;
        const averageRatings = {
            professionalism: 0,
            punctuality: 0,
            helpfulness: 0,
            knowledge: 0,
            overall: 0
        };

        if (totalReviews > 0) {
            const sums = reviews.reduce((acc, review) => ({
                professionalism: acc.professionalism + review.professionalism,
                punctuality: acc.punctuality + review.punctuality,
                helpfulness: acc.helpfulness + review.helpfulness,
                knowledge: acc.knowledge + review.knowledge
            }), { professionalism: 0, punctuality: 0, helpfulness: 0, knowledge: 0 });

            averageRatings.professionalism = parseFloat((sums.professionalism / totalReviews).toFixed(1));
            averageRatings.punctuality = parseFloat((sums.punctuality / totalReviews).toFixed(1));
            averageRatings.helpfulness = parseFloat((sums.helpfulness / totalReviews).toFixed(1));
            averageRatings.knowledge = parseFloat((sums.knowledge / totalReviews).toFixed(1));
            averageRatings.overall = parseFloat((
                (averageRatings.professionalism +
                    averageRatings.punctuality +
                    averageRatings.helpfulness +
                    averageRatings.knowledge) / 4
            ).toFixed(1));
        }

        return NextResponse.json({
            success: true,
            data: {
                reviews: newReviews,
                totalReviews,
                averageRatings
            }
        });

    } catch (error) {
        console.error('Error fetching reviews:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch reviews' },
            { status: 500 }
        );
    }
}

export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    let { id } = await params;
    // id = Number(id);
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const doctorId = parseInt(id);
        if (isNaN(doctorId)) {
            return NextResponse.json({ success: false, error: "Invalid doctor ID" }, { status: 400 });
        }

        const body = await request.json();
        const { professionalism, punctuality, helpfulness, knowledge, review } = body;

        // Validate required fields
        if (!professionalism || !punctuality || !helpfulness || !knowledge || !review) {
            return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
        }

        // Check if user has already reviewed this doctor
        const existingReview = await prisma.doctorReview.findFirst({
            where: {
                doctorId,
                userId: session.user.id
            }
        });

        if (existingReview) {
            return NextResponse.json({ success: false, error: "You have already reviewed this doctor" }, { status: 400 });
        }

        // Create the review
        const newReview = await prisma.doctorReview.create({
            data: {
                professionalism: parseInt(professionalism),
                punctuality: parseInt(punctuality),
                helpfulness: parseInt(helpfulness),
                knowledge: parseInt(knowledge),
                review,
                doctorId,
                userId: session.user.id
            },
            include: {
                user: {
                    select: {
                        name: true,
                        image: true
                    }
                }
            }
        });

        return NextResponse.json({ success: true, message: "Review submitted successfully" }, { status: 200 });
    } catch (error) {
        console.error('Error submitting review:', error);
        return new NextResponse('Internal server error', { status: 500 });
    }
}