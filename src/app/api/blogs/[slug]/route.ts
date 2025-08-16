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
    const newSlug = formData.get("newSlug") as string | null;
    const imageFile = formData.get("image") as File | null;

    // Validate required fields
    if (!title || !authorName || !content) {
      return NextResponse.json(
        { success: false, error: "Title, author name, and content are required" },
        { status: 400 }
      );
    }

    const updateData: any = {};

    if (title) updateData.title = title.trim();
    if (authorName) updateData.authorName = authorName.trim();
    if (content) updateData.content = content.trim();
    if (newSlug) updateData.slug = newSlug.trim();

    // If updating to a new slug, check if it's already taken
    if (newSlug && newSlug !== slug) {
      const existingBlog = await prisma.blog.findUnique({
        where: { slug: newSlug.trim() },
      });
      
      if (existingBlog) {
        return NextResponse.json(
          { success: false, error: "A blog with this slug already exists" },
          { status: 400 }
        );
      }
    }

    if (imageFile) {
      console.log("Uploading image for blog:", slug);

      const imageUrl = await uploadBlogImageToSupabase(imageFile, slug);
      console.log("Image URL:", imageUrl);
      updateData.image = imageUrl;
    }

    console.log("Updating blog with slug:", slug);
    console.log("Update data:", updateData);

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
    
    // Provide more specific error messages
    if (error.code === 'P2025') {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }
    
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
