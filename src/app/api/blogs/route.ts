import { prisma } from "@/lib/prisma";
import { Blog } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const slugString = slug.toString().trim();

  try {
    const blogs = await prisma.blog.findMany();

    if (blogs.length === 0) {
      return NextResponse.json({ error: "No blogs found" }, { status: 404 });
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

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let data: Partial<Blog> = {};
    if (typeof body.title === "string") data.title = body.title.trim();
    if (typeof body.content === "string") data.content = body.content.trim();
    if (typeof body.slug === "string") data.slug = body.slug.trim();
    if (typeof body.authorName === "string")
      data.authorName = body.authorName.trim();
    if (typeof body.image === "string") data.image = body.image.trim();

    if (!data.title || !data.content || !data.slug || !data.authorName) {
      return NextResponse.json(
        { success: false, error: "Title, content, and slug are required" },
        { status: 400 },
      );
    }

    const newBlog = await prisma.blog.create({
      data: data as Blog,
    });

    return NextResponse.json(
      { success: true, data: newBlog, message: "Blog created successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to create blog" },
      { status: 500 },
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    let data: Partial<Blog> = {};
    if (typeof body.title === "string") data.title = body.title.trim();
    if (typeof body.content === "string") data.content = body.content.trim();
    if (typeof body.slug === "string") data.slug = body.slug.trim();
    if (typeof body.authorName === "string")
      data.authorName = body.authorName.trim();
    if (typeof body.image === "string") data.image = body.image.trim();

    if (!data.title || !data.content || !data.slug || !data.authorName) {
      return NextResponse.json(
        { success: false, error: "Title, content, and slug are required" },
        { status: 400 },
      );
    }

    const updatedBlog = await prisma.blog.update({
      where: { slug: data.slug },
      data: data as Blog,
    });

    return NextResponse.json(
      {
        success: true,
        data: updatedBlog,
        message: "Blog updated successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to update blog" },
      { status: 500 },
    );
  }
}
