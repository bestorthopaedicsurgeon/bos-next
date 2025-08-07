import { prisma } from "@/lib/prisma";
import { uploadBlogImageToSupabase } from "@/lib/supabase/upload";
import { Blog } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const returnOptions = searchParams.get("options") === "true";

    const blogs = await prisma.blog.findMany({
      select: returnOptions ? { title: true, slug: true } : undefined,
      orderBy: { createdAt: "desc" },
    });

    if (blogs.length === 0) {
      return NextResponse.json({ error: "No blogs found" }, { status: 404 });
    }

    if (returnOptions) {
      const options = blogs.map((blog) => ({
        label: blog.title,
        value: blog.slug,
      }));

      return NextResponse.json(
        { success: true, data: options },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { success: true, data: blogs, message: "Blogs fetched successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blogs" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const slug = formData.get("slug") as string;
  const authorName = formData.get("authorName") as string;
  const imageFile = formData.get("image") as File | null;

  if (!title || !content || !slug || !authorName) {
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  let imageUrl: string | null = null;

  try {
    if (imageFile) {
      imageUrl = await uploadBlogImageToSupabase(imageFile, slug);
    }

    const newBlog = await prisma.blog.create({
      data: {
        title,
        content,
        slug,
        authorName,
        image: imageUrl,
      },
    });

    return NextResponse.json({ success: true, data: newBlog }, { status: 201 });
  } catch (err) {
    console.error("Create blog error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 },
    );
  }
}

