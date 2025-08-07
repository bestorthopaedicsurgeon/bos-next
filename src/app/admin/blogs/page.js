"use client";
import BlogHeader from "@/components/blogPage/BlogHeader";
import ProfileHeader from "@/components/reusable/profileHeader";
import RichTextEditor from "@/components/reusable/RichTextEditor";
import { SearchableBlogSelect } from "@/components/reusable/SearchableBlogSelect";
import { SearchableSelect } from "@/components/reusable/SearchableSelect";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  createBlogApi,
  deleteBlogApi,
  getAllBlogsApi,
  getBlogBySlugApi,
  updateBlogApi,
} from "@/lib/apiCalls/client/blogs";
import { slugify } from "@/lib/constants/constants";
// import { uploadBlogImageToSupabase } from "@/lib/supabase/upload";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const router = useRouter();

  const [blogs, setBlogs] = useState();
  const [editData, setEditData] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState();

  const formField = "flex flex-col gap-2 max-lg:col-span-2";
  const inputField = "border border-primary rounded-md p-3";

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const blogs = await getAllBlogsApi("options=true");
      setBlogs(blogs);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  const handleCreateBlog = async () => {
    console.log("Blog create called:", editData);

    if (!editData.title || !editData.authorName || !editData.content) {
      toast.error("Please fill in all fields");
      return;
    }
    const blog = await createBlogApi({
      title: editData.title,
      authorName: editData.authorName,
      content: editData.content,
      slug: slugify(editData.title),
      imageFile: editData.imageFile,
    });

    if (blog) {
      toast.success("Blog created successfully");
      setEditData({
        title: "",
        authorName: "",
        content: "",
        imageFile: null,
      });
      fetchBlogs();
    } else {
      toast.error("Failed to create blog");
    }
  };

  const handleUpdateBlog = async () => {
    console.log("Blog update called:", editData);

    if (!selectedBlog) {
      toast.error("Please select a blog to update");
      return;
    }

    if (!editData.title || !editData.authorName || !editData.content) {
      toast.error("Please fill in all fields");
      return;
    }
    const blog = await updateBlogApi({
      title: editData.title,
      authorName: editData.authorName,
      content: editData.content,
      slug: selectedBlog,
      imageFile: editData.imageFile,
    });
    if (blog) {
      toast.success("Blog updated successfully");
      setEditData({
        title: "",
        authorName: "",
        content: "",
        imageFile: null,
      });
      setSelectedBlog(null);
      // fetchBlogs();
    } else {
      toast.error("Failed to update blog");
    }
  };

  // const blogs = [
  //   {
  //     title: "Blog 1",
  //     slug: "blog-1",
  //   },
  //   {
  //     title: "Blog 2",
  //     slug: "blog-2",
  //   },
  //   {
  //     title: "Blog 3",
  //     slug: "blog-3",
  //   },
  // ];

  return (
    <div className="relative">
      <div className="w-64">
        <SearchableBlogSelect
          blogs={blogs} // [{ label: "Blog Title", value: "blog-slug" }]
          value={selectedBlog}
          onChange={(value) => {
            if (value) {
              setSelectedBlog(value);
              getBlogBySlugApi(value).then((blog) => {
                setEditData({
                  title: blog.title,
                  authorName: blog.authorName,
                  content: blog.content,
                  slug: blog.slug,
                  imageFile: null,
                });
              });
            } else {
              setSelectedBlog(null);
              setEditData({
                title: "",
                authorName: "",
                content: "",
                slug: "",
                imageFile: null,
              });
            }
          }}
        />
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <div className={formField}>
          <label>Blog Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className={inputField}
            value={editData?.title}
            onChange={(e) =>
              setEditData({ ...editData, title: e.target.value })
            }
          />
        </div>
        <div className={formField}>
          <label htmlFor="image">Upload Blog Picture</label>
          <input
            type="file"
            name="image"
            id="image"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setEditData((prev) => ({
                  ...prev,
                  imageFile: file, // store file object
                }));
              }
            }}
          />
          <label
            htmlFor="image"
            className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#83C5BE] px-4 py-2 text-white"
          >
            <span>Click to upload</span>
            <span>
              {/* ...existing svg... */}
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6668 4.99936C7.88 4.99936 4 8.86616 4 13.6662C4 13.6662 3.9992 13.6582 4 13.791C1.6216 14.991 0 17.399 0 20.3326C0 24.3326 3.2832 27.6662 7.3332 27.6662H25.3332C29.0148 27.6662 32 24.5994 32 20.9994C32 18.1994 30.2708 15.7746 27.8332 14.7074C27.928 14.441 28 14.0662 28 13.6662C28 10.9994 25.9108 8.99936 23.3332 8.99936C22.2692 8.99936 21.2852 9.24936 20.5 9.91616C19.1092 6.98256 16.124 4.99936 12.6668 4.99936ZM16 11.6662L21.3332 18.3326H18.6668V24.999H13.3332V18.333H10.6668L16 11.6662Z"
                  fill="white"
                />
              </svg>
            </span>
          </label>
        </div>
        <div className={formField}>
          <label>Author</label>
          <input
            type="text"
            name="title"
            id="title"
            className={inputField}
            value={editData?.authorName}
            onChange={(e) =>
              setEditData({ ...editData, authorName: e.target.value })
            }
          />
        </div>
        <RichTextEditor
          value={editData?.content}
          onChange={(content) => {
            setEditData({ ...editData, content: content });
          }}
        />
      </div>
      <div className="mt-8 flex w-full justify-center">
        <Button
          onClick={() => {
            selectedBlog ? handleUpdateBlog() : handleCreateBlog();
          }}
          className="cursor-pointer"
          variant="primary"
          size="primary"
        >
          {selectedBlog ? "Update Blog" : "Create Blog"}
        </Button>
        {selectedBlog && (
          <>
            <Button
              className="ml-4 cursor-pointer"
              variant="secondary"
              size="secondary"
              onClick={() => {
                router.push(`/blog/${selectedBlog}`);
              }}
            >
              Preview Blog
            </Button>
            <Button
              className="ml-4 cursor-pointer"
              variant="destructive"
              size="primary"
              onClick={async () => {
                const deleted = await deleteBlogApi(selectedBlog);
                if (deleted) {
                  setSelectedBlog(null);
                  setEditData({
                    title: "",
                    authorName: "",
                    content: "",
                    slug: "",
                    imageFile: null,
                  });
                  toast.success("Blog deleted successfully");
                } else {
                  toast.error("Failed to delete blog");
                }
              }}
            >
              Delete Blog
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
