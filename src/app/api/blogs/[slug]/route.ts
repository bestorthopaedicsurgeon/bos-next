import { prisma } from "@/lib/prisma";
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
