import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  const userId = session.user.id;

  try {
    // Fetch user with their reviews and questions
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        reviews: {
          include: {
            doctor: {
              select: {
                id: true,
                name: true,
                image: true,
                designation: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        Question: {
          include: {
            doctor: {
              select: {
                id: true,
                name: true,
                image: true,
                designation: true,
              },
            },
            answers: {
              include: {
                author: {
                  select: {
                    id: true,
                    name: true,
                    image: true,
                  },
                },
              },
              orderBy: {
                createdAt: "asc",
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    // Calculate average rating for each review
    const reviewsWithAverage = user.reviews.map((review) => ({
      ...review,
      averageRating: parseFloat(
        (
          (review.professionalism +
            review.punctuality +
            review.helpfulness +
            review.knowledge) /
          4
        ).toFixed(1)
      ),
    }));

    return NextResponse.json(
      {
        success: true,
        data: {
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            phone: user.phone,
            dob: user.dob,
            age: user.age,
            firstName: user.firstName,
            lastName: user.lastName,
            createdAt: user.createdAt,
            hasPassword: !!user.password,
          },
          reviews: reviewsWithAverage,
          questions: user.Question,
        },
        message: "User data fetched successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch user data" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  const userId = session.user.id;

  try {
    const body = await request.json();
    const { name, phone, dob } = body;

    let calculatedAge = undefined;
    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        ...(name && { name }),
        ...(phone && { phone }),
        ...(dob && { dob: new Date(dob) }),
        ...(calculatedAge !== undefined && { age: calculatedAge }),
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          id: updatedUser.id,
          name: updatedUser.name,
          email: updatedUser.email,
          phone: updatedUser.phone,
          dob: updatedUser.dob,
          age: updatedUser.age,
        },
        message: "Profile updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user profile:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update profile" },
      { status: 500 }
    );
  }
}
