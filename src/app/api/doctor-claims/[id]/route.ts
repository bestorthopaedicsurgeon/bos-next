import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { sendClaimApprovedEmail } from "@/lib/services/emailService";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);

    // Only admins can update claim requests
    if (session?.user?.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const { id } = await params;
    const { status, userId } = await request.json();

    if (!["APPROVED", "REJECTED", "PENDING"].includes(status)) {
      return NextResponse.json(
        {
          error: "Invalid status. Must be either APPROVED, REJECTED or PENDING",
        },
        { status: 400 },
      );
    }

    // Find the claim request
    const claimRequest = await prisma.doctorClaimRequest.findUnique({
      where: { id: parseInt(id) },
      include: { doctor: true },
    });

    if (!claimRequest) {
      return NextResponse.json(
        { error: "Claim request not found" },
        { status: 404 },
      );
    }

    // If approving, make sure we have a user ID and the doctor isn't already claimed
    if (status === "APPROVED") {
      if (!userId) {
        return NextResponse.json(
          { error: "User ID is required for approval" },
          { status: 400 },
        );
      }

      // Check if the doctor is already claimed by another user
      if (claimRequest.doctor.userId) {
        return NextResponse.json(
          { error: "This doctor profile is already claimed by another user" },
          { status: 400 },
        );
      }

      // Check if the user already has a doctor profile
      const existingDoctorProfile = await prisma.doctorProfile.findUnique({
        where: { userId },
      });

      if (existingDoctorProfile) {
        return NextResponse.json(
          { error: "This user already has a doctor profile" },
          { status: 400 },
        );
      }
    }

    if (status === "PENDING") {
      if (claimRequest.status === "PENDING") {
        return NextResponse.json(
          { error: "This doctor's profile claim request is already PENDING" },
          { status: 400 },
        );
      }
    }

    // Update the claim request
    const updatedClaim = await prisma.$transaction(async (tx) => {
      let finalUserId = userId;
      let generatedPassword = "";

      // If approving and no userId provided, or if we need to check if user exists
      if (status === "APPROVED") {
        let user = await tx.user.findUnique({
          where: { email: claimRequest.email },
        });

        if (!user) {
          // Create new user if they don't exist
          generatedPassword = Math.random().toString(36).slice(-10);
          const hashedPassword = await bcrypt.hash(generatedPassword, 10);
          
          user = await tx.user.create({
            data: {
              email: claimRequest.email,
              name: claimRequest.name,
              password: hashedPassword,
              role: "DOCTOR",
            },
          });
        }

        finalUserId = user.id;

        // Check if the doctor is already claimed by another user (not the one we're assigning)
        if (claimRequest.doctor.userId && claimRequest.doctor.userId !== finalUserId) {
          throw new Error("This doctor profile is already claimed by another user");
        }

        // Link the doctor profile to the user
        await tx.doctorProfile.update({
          where: { id: claimRequest.doctorId },
          data: {
            userId: finalUserId,
          },
        });
      }

      const updatedClaim = await tx.doctorClaimRequest.update({
        where: { id: parseInt(id) },
        data: {
          status,
          userId: status === "APPROVED" ? finalUserId : undefined,
        },
      });

      if (status === "PENDING") {
        const doctorProfile = await tx.doctorProfile.findUnique({
          where: { id: claimRequest.doctorId },
        });

        if (doctorProfile?.userId) {
          await tx.doctorProfile.update({
            where: { id: claimRequest.doctorId },
            data: {
              userId: null,
            },
          });
        }
      }

      return { updatedClaim, generatedPassword, finalUserId };
    });

    // Send email after transaction succeeds
    if (status === "APPROVED") {
      try {
        await sendClaimApprovedEmail(
          claimRequest.email,
          claimRequest.name,
          updatedClaim.generatedPassword || undefined
        );
      } catch (emailError) {
        console.error("Failed to send approval email:", emailError);
        // We don't fail the whole request if email fails, but we log it
      }
    }

    return NextResponse.json(updatedClaim.updatedClaim);
  } catch (error) {
    console.error("Error updating claim request:", error);
    return NextResponse.json(
      { error: "An error occurred while updating the claim request" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);

    // Only admins can delete claim requests
    if (session?.user?.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const { id } = await params;

    // Delete the claim request
    await prisma.doctorClaimRequest.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json(
      { message: "Claim request deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting claim request:", error);
    return NextResponse.json(
      { error: "An error occurred while deleting the claim request" },
      { status: 500 },
    );
  }
}
