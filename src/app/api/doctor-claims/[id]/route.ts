import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

type Params = { params: Promise<{ id: string }>; };

export async function PATCH(request: Request, { params }: Params) {
    try {
        const session = await getServerSession(authOptions);

        // Only admins can update claim requests
        if (session?.user?.role !== 'ADMIN') {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 403 }
            );
        }

        const { id } = await params;
        const { status, userId } = await request.json();

        if (!['APPROVED', 'REJECTED', 'PENDING'].includes(status)) {
            return NextResponse.json(
                { error: 'Invalid status. Must be either APPROVED, REJECTED, or PENDING' },
                { status: 400 }
            );
        }

        // Find the claim request
        const claimRequest = await prisma.doctorClaimRequest.findUnique({
            where: { id: parseInt(id) },
            include: { doctor: true },
        });

        if (!claimRequest) {
            return NextResponse.json(
                { error: 'Claim request not found' },
                { status: 404 }
            );
        }

        // If approving, make sure we have a user ID and the doctor isn't already claimed
        if (status === 'APPROVED') {
            if (!userId) {
                return NextResponse.json(
                    { error: 'User ID is required for approval' },
                    { status: 400 }
                );
            }

            // Check if the doctor is already claimed by another user
            if (claimRequest.doctor.userId) {
                return NextResponse.json(
                    { error: 'This doctor profile is already claimed by another user' },
                    { status: 400 }
                );
            }

            // Check if the user already has a doctor profile
            const existingDoctorProfile = await prisma.doctorProfile.findUnique({
                where: { userId },
            });

            if (existingDoctorProfile) {
                return NextResponse.json(
                    { error: 'This user already has a doctor profile' },
                    { status: 400 }
                );
            }
        }

        // Update the claim request
        const updatedClaim = await prisma.$transaction(async (prisma) => {
            const updatedClaim = await prisma.doctorClaimRequest.update({
                where: { id: parseInt(id) },
                data: {
                    status,
                    userId: status === 'APPROVED' ? userId : undefined,
                },
            });

            // If approved, link the doctor profile to the user
            if (status === 'APPROVED') {
                await prisma.doctorProfile.update({
                    where: { id: claimRequest.doctorId },
                    data: {
                        userId,
                    },
                });
            }
            
            // If changing to pending (unapprove), unlink the doctor profile
            if (status === 'PENDING' && claimRequest.doctor.userId) {
                await prisma.doctorProfile.update({
                    where: { id: claimRequest.doctorId },
                    data: {
                        userId: null,
                    },
                });
            }

            return updatedClaim;
        });

        return NextResponse.json(updatedClaim);

    } catch (error) {
        console.error('Error updating claim request:', error);
        return NextResponse.json(
            { error: 'An error occurred while updating the claim request' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: Request, { params }: Params) {
    try {
        const session = await getServerSession(authOptions);

        // Only admins can delete claim requests
        if (session?.user?.role !== 'ADMIN') {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 403 }
            );
        }

        const { id } = await params; 

        // Delete the claim request
        await prisma.doctorClaimRequest.delete({
            where: { id: parseInt(id) },
        });

        return NextResponse.json(
            { message: 'Claim request deleted successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error deleting claim request:', error);
        return NextResponse.json(
            { error: 'An error occurred while deleting the claim request' },
            { status: 500 }
        );
    }
}
