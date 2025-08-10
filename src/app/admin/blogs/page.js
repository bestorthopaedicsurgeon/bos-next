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
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const router = useRouter();

  const [blogs, setBlogs] = useState();
  const [editData, setEditData] = useState({
    title: "",
    authorName: "",
    content: "",
    imageFile: null,
    introduction: "",
    conclusion: "",
    keyPoints: [],
    prosCons: { pros: [], cons: [] }
  });
  const [openModal, setOpenModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState();
  const [showPreview, setShowPreview] = useState(false);

  const formField = "flex flex-col gap-2 max-lg:col-span-2";
  const inputField = "border border-primary rounded-md p-3";

  // Blog content templates based on PDF format
  const blogTemplates = {
    comparison: {
      title: "Comparison Blog Template",
      structure: `
        <h2>Introduction</h2>
        <p>Brief introduction about the topic and why this comparison matters.</p>
        
        <h2>What Is [Option A]?</h2>
        <p>Detailed explanation of the first option.</p>
        
        <h3>Pros:</h3>
        <ul>
          <li>Advantage 1</li>
          <li>Advantage 2</li>
          <li>Advantage 3</li>
        </ul>
        
        <h3>Cons:</h3>
        <ul>
          <li>Disadvantage 1</li>
          <li>Disadvantage 2</li>
        </ul>
        
        <h2>What Is [Option B]?</h2>
        <p>Detailed explanation of the second option.</p>
        
        <h3>Pros:</h3>
        <ul>
          <li>Advantage 1</li>
          <li>Advantage 2</li>
        </ul>
        
        <h3>Cons:</h3>
        <ul>
          <li>Disadvantage 1</li>
          <li>Disadvantage 2</li>
        </ul>
        
        <h2>Key Differences</h2>
        <p>Comparison table or detailed differences.</p>
        
        <h2>Which Option Is Right for You?</h2>
        <p>Guidance on choosing between options.</p>
        
        <h2>Conclusion</h2>
        <p>Summary and final recommendations.</p>
      `
    },
    procedure: {
      title: "Medical Procedure Blog Template",
      structure: `
        <h2>Introduction</h2>
        <p>Overview of the medical procedure and its importance.</p>
        
        <h2>What Is [Procedure Name]?</h2>
        <p>Detailed explanation of the procedure.</p>
        
        <h2>When Is It Needed?</h2>
        <p>Indications and when the procedure is recommended.</p>
        
        <h2>How Is It Performed?</h2>
        <p>Step-by-step explanation of the procedure.</p>
        
        <h2>Recovery and Rehabilitation</h2>
        <p>What to expect during recovery.</p>
        
        <h2>Risks and Complications</h2>
        <p>Potential risks and how they're managed.</p>
        
        <h2>Success Rates and Outcomes</h2>
        <p>Expected outcomes and success rates.</p>
        
        <h2>Conclusion</h2>
        <p>Summary and next steps for patients.</p>
      `
    }
  };

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
      toast.error("Please fill in all required fields");
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
        introduction: "",
        conclusion: "",
        keyPoints: [],
        prosCons: { pros: [], cons: [] }
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
      toast.error("Please fill in all required fields");
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
        introduction: "",
        conclusion: "",
        keyPoints: [],
        prosCons: { pros: [], cons: [] }
      });
      setSelectedBlog(null);
    } else {
      toast.error("Failed to update blog");
    }
  };

  const applyTemplate = (templateType) => {
    const template = blogTemplates[templateType];
    if (template) {
      setEditData(prev => ({
        ...prev,
        content: template.structure
      }));
      toast.success(`Applied ${template.title}`);
    }
  };

  const handleKeyPointAdd = () => {
    const newPoint = prompt("Enter key point:");
    if (newPoint) {
      setEditData(prev => ({
        ...prev,
        keyPoints: [...prev.keyPoints, newPoint]
      }));
    }
  };

  const handleKeyPointRemove = (index) => {
    setEditData(prev => ({
      ...prev,
      keyPoints: prev.keyPoints.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="relative max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Blog Management</h1>
        <p className="text-gray-600">Create and manage medical blog content for your website.</p>
      </div>

      {/* Blog Selection */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-2">Select Existing Blog</label>
        <div className="w-96">
          <SearchableBlogSelect
            blogs={blogs}
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
                    introduction: "",
                    conclusion: "",
                    keyPoints: [],
                    prosCons: { pros: [], cons: [] }
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
                  introduction: "",
                  conclusion: "",
                  keyPoints: [],
                  prosCons: { pros: [], cons: [] }
                });
              }
            }}
          />
        </div>
      </div>

      {/* Blog Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Basic Info */}
          <div className="space-y-6">
            <div className={formField}>
              <label className="text-sm font-medium">Blog Title *</label>
              <input
                type="text"
                name="title"
                className={inputField}
                value={editData?.title || ""}
                onChange={(e) =>
                  setEditData({ ...editData, title: e.target.value })
                }
                placeholder="e.g., Robotic Assisted vs. Conventional Total Knee Replacement"
              />
            </div>

            <div className={formField}>
              <label className="text-sm font-medium">Author Name *</label>
              <input
                type="text"
                name="authorName"
                className={inputField}
                value={editData?.authorName || ""}
                onChange={(e) =>
                  setEditData({ ...editData, authorName: e.target.value })
                }
                placeholder="e.g., Dr. John Smith"
              />
            </div>

            <div className={formField}>
              <label className="text-sm font-medium">Blog Image</label>
              <input
                type="file"
                name="image"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setEditData((prev) => ({
                      ...prev,
                      imageFile: file,
                    }));
                  }
                }}
                accept="image/*"
              />
              <label
                htmlFor="image"
                className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#83C5BE] px-4 py-2 text-white hover:bg-[#6ba8a1] transition-colors"
              >
                <span>Upload Blog Image</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6668 4.99936C7.88 4.99936 4 8.86616 4 13.6662C4 13.6662 3.9992 13.6582 4 13.791C1.6216 14.991 0 17.399 0 20.3326C0 24.3326 3.2832 27.6662 7.3332 27.6662H25.3332C29.0148 27.6662 32 24.5994 32 20.9994C32 18.1994 30.2708 15.7746 27.8332 14.7074C27.928 14.441 28 14.0662 28 13.6662C28 10.9994 25.9108 8.99936 23.3332 8.99936C22.2692 8.99936 21.2852 9.24936 20.5 9.91616C19.1092 6.98256 16.124 4.99936 12.6668 4.99936ZM16 11.6662L21.3332 18.3326H18.6668V24.999H13.3332V18.333H10.6668L16 11.6662Z"
                    fill="white"
                  />
                </svg>
              </label>
              {editData?.imageFile && (
                <p className="text-sm text-green-600 mt-1">
                  ✓ {editData.imageFile.name} selected
                </p>
              )}
            </div>

            {/* Content Templates */}
            <div className={formField}>
              <label className="text-sm font-medium">Content Templates</label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => applyTemplate('comparison')}
                  className="text-xs"
                >
                  Comparison Blog
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => applyTemplate('procedure')}
                  className="text-xs"
                >
                  Medical Procedure
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Content Preview</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setShowPreview(!showPreview)}
              >
                {showPreview ? "Hide Preview" : "Show Preview"}
              </Button>
            </div>
            
            {showPreview && editData?.title && (
              <div className="border rounded-lg p-4 bg-gray-50 max-h-96 overflow-y-auto">
                <h2 className="text-xl font-bold mb-2">{editData.title}</h2>
                {editData.authorName && (
                  <p className="text-sm text-gray-600 mb-4">By {editData.authorName}</p>
                )}
                <div 
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: editData.content || "No content yet..." }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Rich Text Editor */}
        <div className="mt-8">
          <label className="block text-sm font-medium mb-2">Blog Content *</label>
          <RichTextEditor
            value={editData?.content || ""}
            onChange={(content) => {
              setEditData({ ...editData, content: content });
            }}
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
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
                className="cursor-pointer px-5"
                variant="secondary"
                size="secondary"
                onClick={() => {
                  router.push(`/blog/${selectedBlog}`);
                }}
              >
                Preview Blog
              </Button>
              <Button
                className="cursor-pointer"
                variant="destructive"
                size="primary"
                onClick={async () => {
                  if (confirm("Are you sure you want to delete this blog?")) {
                    const deleted = await deleteBlogApi(selectedBlog);
                    if (deleted) {
                      setSelectedBlog(null);
                      setEditData({
                        title: "",
                        authorName: "",
                        content: "",
                        slug: "",
                        imageFile: null,
                        introduction: "",
                        conclusion: "",
                        keyPoints: [],
                        prosCons: { pros: [], cons: [] }
                      });
                      toast.success("Blog deleted successfully");
                      fetchBlogs();
                    } else {
                      toast.error("Failed to delete blog");
                    }
                  }
                }}
              >
                Delete Blog
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
