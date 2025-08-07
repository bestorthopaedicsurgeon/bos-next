import { prisma } from "@/lib/prisma";
import { uploadBlogImageToSupabase } from "@/lib/supabase/upload";
import { m } from "motion/dist/react";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const slugString = slug.toString().trim();

  try {
    const blog = await prisma.blog.findUnique({
      where: { slug: slugString },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { success: true, data: blog, message: "Blog fetched successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blog" },
      { status: 500 },
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  try {
    const formData = await req.formData();

    const title = formData.get("title") as string | null;
    const authorName = formData.get("authorName") as string | null;
    const content = formData.get("content") as string | null;
    const imageFile = formData.get("image") as File | null;

    const updateData: any = {};

    if (title) updateData.title = title.trim();
    if (authorName) updateData.authorName = authorName.trim();
    if (content) updateData.content = content.trim();

    if (imageFile) {
      console.log("Uploading image for blog:", slug);

      const imageUrl = await uploadBlogImageToSupabase(imageFile, slug);
      console.log("Image URL:", imageUrl);
      updateData.image = imageUrl;
    }

    const updatedBlog = await prisma.blog.update({
      where: { slug },
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      data: updatedBlog,
      message: "Blog updated successfully",
    });
  } catch (error: any) {
    console.error("Update error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update blog" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const slugString = slug.toString().trim();

  try {
    const blog = await prisma.blog.delete({
      where: { slug: slugString },
    });

    return NextResponse.json(
      { success: true, data: blog, message: "Blog deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to delete blog" },
      { status: 500 },
    );
  }
}
