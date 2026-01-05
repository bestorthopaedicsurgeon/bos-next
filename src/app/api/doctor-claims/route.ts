import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { sendClaimSubmittedEmail } from '@/lib/services/emailService';

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        const userId = session?.user?.id;

        // if (!userId) {
        //     return NextResponse.json(
        //         { error: 'You must be logged in to submit a claim request' },
        //         { status: 401 }
        //     );
        // }

        const { doctorId, name, email, phone, ahpraNumber } = await request.json();

        // Validate required fields
        if (!doctorId || !name || !email || !phone || !ahpraNumber) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Check if doctor exists
        const doctor = await prisma.doctorProfile.findUnique({
            where: { id: doctorId },
        });

        if (!doctor) {
            return NextResponse.json(
                { error: 'Doctor not found' },
                { status: 404 }
            );
        }

        // Check if there's already a pending or approved claim for this doctor and email
        const existingClaim = await prisma.doctorClaimRequest.findFirst({
            where: {
                doctorId,
                email,
                status: {
                    in: ['PENDING', 'APPROVED']
                }
            }
        });

        if (existingClaim) {
            return NextResponse.json(
                {
                    error: existingClaim.status === 'PENDING'
                        ? 'A claim request is already pending for this doctor and email'
                        : 'This doctor profile has already been claimed with this email'
                },
                { status: 400 }
            );
        }

        // Create the claim request
        const claimRequest = await prisma.doctorClaimRequest.create({
            data: {
                doctorId,
                name,
                email,
                phone,
                ahpraNumber,
                userId: userId || null,
            },
        });

        // Send confirmation email to the doctor
        try {
            await sendClaimSubmittedEmail(email, name);
        } catch (emailError) {
            // Log the error but don't fail the request if email sending fails
            console.error('Failed to send claim submission email:', emailError);
        }

        return NextResponse.json(
            {
                message: 'Claim request submitted successfully. An admin will review your request shortly.',
                claimRequest
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error creating claim request:', error);
        return NextResponse.json(
            { error: 'An error occurred while processing your request' },
            { status: 500 }
        );
    }
}

export async function GET(request: Request) {
    try {
        const session = await getServerSession(authOptions);

        // Only admins can view claim requests
        if (session?.user?.role !== 'ADMIN') {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 403 }
            );
        }

        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status') as 'PENDING' | 'APPROVED' | 'REJECTED' | undefined;

        const claims = await prisma.doctorClaimRequest.findMany({
            where: status ? { status } : {},
            include: {
                doctor: {
                    select: {
                        id: true,
                        name: true,
                        location: true,
                    }
                },
                user: {
                    select: {
                        id: true,
                        email: true,
                        name: true,
                    }
                }
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        return NextResponse.json(claims);

    } catch (error) {
        console.error('Error fetching claim requests:', error);
        return NextResponse.json(
            { error: 'An error occurred while fetching claim requests' },
            { status: 500 }
        );
    }
}
