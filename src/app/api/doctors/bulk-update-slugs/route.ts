import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { revalidateDoctorContent } from "@/lib/data/publicData";

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-"); // Replace multiple - with single -
}

export async function POST() {
  try {
    const doctors = await prisma.doctorProfile.findMany({
      where: {
        OR: [
          { slug: null },
          { slug: "" }
        ]
      },
      select: {
        id: true,
        name: true,
      }
    });

    let updatedCount = 0;

    for (const doctor of doctors) {
      if (!doctor.name) continue;

      let baseSlug = slugify(doctor.name);
      let slug = baseSlug;
      let counter = 1;

      // Ensure uniqueness
      while (true) {
        const existing = await prisma.doctorProfile.findUnique({
          where: { slug }
        });

        if (!existing || existing.id === doctor.id) break;
        
        slug = `${baseSlug}-${counter}`;
        counter++;
      }

      await prisma.doctorProfile.update({
        where: { id: doctor.id },
        data: { slug }
      });

      updatedCount++;
    }

    if (updatedCount > 0) {
      revalidateDoctorContent();
    }

    return NextResponse.json({
      success: true,
      message: `Updated ${updatedCount} doctors with slugs.`,
      updatedCount
    });
  } catch (error: any) {
    console.error("Error bulk updating slugs:", error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}
