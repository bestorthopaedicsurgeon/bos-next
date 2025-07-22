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
  
  await prisma.doctorProfile.update({
    where: { id: Number(doctorId) },
    data: { image: imageUrl },
  });

  return NextResponse.json({ success: true, imageUrl });
}