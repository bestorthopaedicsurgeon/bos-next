import { NextRequest, NextResponse } from "next/server";
import { uploadToSupabase } from "@/lib/supabase/upload";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const doctorId = formData.get("doctorId") as string;
  const file = formData.get("file") as File;

  if (!file || !doctorId) {
    return NextResponse.json({ error: "Missing image or doctorId" }, { status: 400 });
  }

  const imageUrl = await uploadToSupabase(file, doctorId);
  if (!imageUrl) {
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
  }

  // Save to database
  
  await prisma.$transaction(async (tx) => {
    // 1. Update doctor image
    const doctor = await tx.doctorProfile.update({
      where: { id: Number(doctorId) },
      data: { image: imageUrl },
    });
  
    // 2. If doctor is linked to a user, update that user's image too
    if (doctor.userId) {
      await tx.user.update({
        where: { id: doctor.userId },
        data: { image: imageUrl },
      });
    }
  });

  return NextResponse.json({ success: true, imageUrl });
}