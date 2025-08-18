"use client";
import BlogHeader from "@/components/blogPage/BlogHeader";
import CustomRichTextEditorDemo from "@/components/reusable/CustomRichTextEditorDemo";
import ProfileHeader from "@/components/reusable/profileHeader";
import RichTextEditor from "@/components/reusable/RichTextEditor";
import CustomRichTextEditor from "@/components/reusable/CustomRichTextEditor";
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
import React, { useEffect, useState, useCallback } from "react";
import { toast } from "sonner";

const Page = () => {
  const router = useRouter();

  // Custom styles for preview content
  const previewStyles = `
    .preview-content h1, .preview-content h2, .preview-content h3, .preview-content h4, .preview-content h5, .preview-content h6 {
      margin: 1em 0 0.5em 0;
      font-weight: 600;
      line-height: 1.2;
    }
    .preview-content h1 { font-size: 1.5em; }
    .preview-content h2 { font-size: 1.3em; }
    .preview-content h3 { font-size: 1.1em; }
    .preview-content p { margin: 0.5em 0; }
    .preview-content ul, .preview-content ol { 
      margin: 0.5em 0; 
      padding-left: 1.5em; 
    }
    .preview-content li { margin: 0.25em 0; }
    .preview-content table { 
      border-collapse: collapse; 
      width: 100%; 
      margin: 1em 0;
      border: 1px solid #ddd;
    }
    .preview-content th, .preview-content td { 
      border: 1px solid #ddd; 
      padding: 8px; 
      text-align: left; 
    }
    .preview-content th { background-color: #f5f5f5; font-weight: 600; }
    .preview-content blockquote { 
      border-left: 4px solid #ddd; 
      margin: 1em 0; 
      padding-left: 1em; 
      font-style: italic; 
    }
    .preview-content .medical-block { 
      background-color: #f8f9fa; 
      border: 1px solid #e9ecef; 
      border-radius: 4px; 
      padding: 1em; 
      margin: 1em 0; 
    }
    .preview-content .medical-block h4 { margin-top: 0; }
  `;

  const [blogs, setBlogs] = useState();
  const [editData, setEditData] = useState({
    title: "",
    authorName: "",
    slug: "",
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
  const [currentAlignment, setCurrentAlignment] = useState('left');
  const [slugAvailable, setSlugAvailable] = useState(true);
  const [slugChecking, setSlugChecking] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state when component initializes
  useEffect(() => {
    try {
      console.log('Component mounting, setting isMounted to true');
      setIsMounted(true);
    } catch (error) {
      console.error('Error in mount effect:', error);
    }
  }, []);

  // Function to check if slug is available
  const checkSlugAvailability = async (slug) => {
    try {
      // Don't run if component is not mounted
      if (!isMounted) return true;
      
      // Safety check for selectedBlog - ensure it's defined
      if (!slug) return true;
      
      // Get current selectedBlog value safely
      const currentSelectedBlog = selectedBlog;
      if (currentSelectedBlog && slug === currentSelectedBlog) return true; // Current blog's slug is always available
      
      setSlugChecking(true);
      try {
        // Check if slug exists by trying to get a blog with that slug
        const existingBlog = await getBlogBySlugApi(slug);
        
        // If existingBlog is null, it means no blog was found with that slug (slug is available)
        // If existingBlog exists, it means the slug is taken
        const isAvailable = existingBlog === null;
        
        setSlugAvailable(isAvailable);
        return isAvailable;
      } catch (error) {
        // If there's an actual API error (not 404), assume slug is available as fallback
        console.warn('API error during slug check, assuming available:', error);
        setSlugAvailable(true);
        return true;
      } finally {
        setSlugChecking(false);
      }
    } catch (error) {
      console.error('Error in checkSlugAvailability:', error);
      setSlugChecking(false);
      setSlugAvailable(true);
      return true;
    }
  };

  // Debounced slug availability check
  const debouncedSlugCheck = useCallback((slug) => {
    // Don't run if component is not mounted
    if (!isMounted) return;
    
    // Simple debouncing without lodash dependency
    if (slug && slug.length > 2) {
      // Clear any existing timeout
      if (window.slugCheckTimeout) {
        clearTimeout(window.slugCheckTimeout);
      }
      
      // Set new timeout - capture current selectedBlog value
      const currentSelectedBlog = selectedBlog;
      window.slugCheckTimeout = setTimeout(() => {
        // Create a local function that has access to the captured value
        const checkSlugLocal = async (slugToCheck) => {
          try {
            // Don't run if component is not mounted
            if (!isMounted) return true;
            
            // Safety check for selectedBlog using captured value
            if (!slugToCheck || (currentSelectedBlog && slugToCheck === currentSelectedBlog)) return true;
            
            setSlugChecking(true);
            try {
              // Check if slug exists by trying to get a blog with that slug
              const existingBlog = await getBlogBySlugApi(slugToCheck);
              
              // If existingBlog is null, it means no blog was found with that slug (slug is available)
              // If existingBlog exists, it means the slug is taken
              const isAvailable = existingBlog === null;
              
              setSlugAvailable(isAvailable);
              return isAvailable;
            } catch (error) {
              // If there's an actual API error (not 404), assume slug is available as fallback
              console.warn('API error during debounced slug check, assuming available:', error);
              setSlugAvailable(true);
              return true;
            } finally {
              setSlugChecking(false);
            }
          } catch (error) {
            console.error('Error in checkSlugLocal:', error);
            setSlugChecking(false);
            setSlugAvailable(true);
            return true;
          }
        };
        
        checkSlugLocal(slug);
      }, 500);
    }
  }, [isMounted, selectedBlog]);

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
    try {
      // Don't run if component is not mounted
      if (!isMounted) return;
      
      console.log('Main effect running, fetching blogs...');
      
      fetchBlogs();
      
      // Inject preview styles
      const styleElement = document.createElement('style');
      styleElement.textContent = previewStyles;
      document.head.appendChild(styleElement);
      
      // Cleanup on unmount
      return () => {
        if (styleElement.parentNode) {
          styleElement.parentNode.removeChild(styleElement);
        }
      };
    } catch (error) {
      console.error('Error in main effect:', error);
    }
  }, [isMounted]);

  // Reset editor when switching blogs
  useEffect(() => {
    try {
      // Don't run if component is not mounted
      if (!isMounted) return;
      
      console.log('selectedBlog changed:', selectedBlog);
      
      if (selectedBlog) {
        // When a blog is selected, the editData will be updated
        // The CustomRichTextEditor will detect this change and update accordingly
        setSlugAvailable(true); // Reset slug availability for new blog
      } else {
        // When no blog is selected (new blog), reset the form
        setSlugAvailable(true); // Reset slug availability for new blog
      }
    } catch (error) {
      console.error('Error in selectedBlog effect:', error);
    }
  }, [selectedBlog, isMounted]);

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

    // Use custom slug if provided, otherwise auto-generate from title
    const finalSlug = editData.slug || slugify(editData.title);
    
    // Check if slug is available
    if (editData.slug) {
      const isAvailable = await checkSlugAvailability(finalSlug);
      if (!isAvailable) {
        toast.error("Please choose a different slug. This one is already taken.");
        return;
      }
    }
    
    const blog = await createBlogApi({
      title: editData.title,
      authorName: editData.authorName,
      content: editData.content,
      slug: finalSlug,
      imageFile: editData.imageFile,
    });

    if (blog) {
      toast.success("Blog created successfully");
      setEditData({
        title: "",
        authorName: "",
        slug: "",
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
    console.log("Current selectedBlog:", selectedBlog);

    if (!selectedBlog) {
      toast.error("Please select a blog to update");
      return;
    }

    if (!editData.title || !editData.authorName || !editData.content) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      // Use custom slug if provided, otherwise use the existing selectedBlog slug
      const finalSlug = editData.slug || selectedBlog;
      console.log("Final slug for update:", finalSlug);
      
      // Check if new slug is available (only if slug changed)
      if (editData.slug && editData.slug !== selectedBlog) {
        console.log("Checking slug availability for:", finalSlug);
        const isAvailable = await checkSlugAvailability(finalSlug);
        console.log("Slug availability result:", isAvailable);
        
        if (!isAvailable) {
          toast.error("Please choose a different slug. This one is already taken.");
          return;
        }
      }
      
      // For update, we need to pass both the old slug (to find the blog) and the new slug (to update to)
      const updateData = {
        title: editData.title,
        authorName: editData.authorName,
        content: editData.content,
        oldSlug: selectedBlog, // Use the old slug to find the blog
        newSlug: finalSlug,   // Use the new slug to update to
        imageFile: editData.imageFile,
      };
      
      console.log("Calling updateBlogApi with:", updateData);
      
      const blog = await updateBlogApi(updateData);
      
      if (blog) {
        toast.success("Blog updated successfully");
        setEditData({
          title: "",
          authorName: "",
          slug: "",
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
    } catch (error) {
      console.error("Error in handleUpdateBlog:", error);
      toast.error("An error occurred while updating the blog");
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
    <>
      {!isMounted ? (
        <div className="container flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      ) : (
        <div className="container">
          {/* Debug info - remove in production
          <div className="mb-4 p-2 bg-yellow-100 text-xs">
            Debug: isMounted={isMounted.toString()}, selectedBlog={selectedBlog || 'null'}, 
            slugAvailable={slugAvailable.toString()}, slugChecking={slugChecking.toString()}
          </div> */}
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
              <label className="text-sm font-medium">Custom Slug</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="slug"
                  className={`${inputField} flex-1`}
                  value={editData?.slug || ""}
                  onChange={(e) => {
                    const slug = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
                    setEditData({ ...editData, slug: slug });
                    if (slug) {
                      debouncedSlugCheck(slug); // Trigger slug check on input change
                    } else {
                      setSlugAvailable(true); // Reset when slug is cleared
                    }
                  }}
                  placeholder="e.g., robotic-knee-replacement-guide"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={async () => {
                    if (editData?.title) {
                      let baseSlug = slugify(editData.title);
                      let finalSlug = baseSlug;
                      let counter = 1;
                      
                      // Check if base slug is available, if not, add numbers until we find an available one
                      while (!(await checkSlugAvailability(finalSlug))) {
                        finalSlug = `${baseSlug}-${counter}`;
                        counter++;
                      }
                      
                      setEditData({ ...editData, slug: finalSlug });
                    }
                  }}
                  className="text-xs whitespace-nowrap"
                  title="Generate unique slug from title"
                >
                  Auto
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Custom URL: <span className="font-mono text-blue-600">/blog/{editData?.slug || 'your-slug-here'}</span>
              </p>
              {slugChecking && (
                <p className="text-xs text-gray-500 mt-1">🔄 Checking slug availability...</p>
              )}
              {!slugChecking && editData?.slug && slugAvailable && (
                <p className="text-xs text-green-600 mt-1">✅ Slug is available!</p>
              )}
              {!slugChecking && editData?.slug && !slugAvailable && (
                <p className="text-xs text-red-600 mt-1">❌ Slug is not available. Please choose another.</p>
              )}
              <p className="text-xs text-gray-400 mt-1">
                💡 Tip: Use lowercase letters, numbers, and hyphens only. Leave empty to auto-generate from title.
              </p>
            </div>

            <div className={formField}>
              <label className="text-sm font-medium">Blog Image</label>
              <input
                id="blog-image-input"
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
                htmlFor="blog-image-input"
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
            
            {showPreview && (
              <div className="border rounded-lg p-4 bg-gray-50 max-h-96 overflow-y-auto">
                {editData?.title ? (
                  <>
                    <h2 className="text-xl font-bold mb-2">{editData.title}</h2>
                    {editData.authorName && (
                      <p className="text-sm text-gray-600 mb-4">By {editData.authorName}</p>
                    )}
                    {editData.content ? (
                      <div 
                        className="max-w-none preview-content"
                        dangerouslySetInnerHTML={{ __html: editData.content }}
                        style={{
                          lineHeight: '1.6',
                          fontSize: '14px'
                        }}
                      />
                    ) : (
                      <div className="text-gray-500 italic text-center py-8">
                        No content yet. Start writing in the editor above to see a preview here.
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-gray-500 italic text-center py-8">
                    Enter a blog title to see the preview.
                  </div>
                )}
                
             
              </div>
            )}
          </div>
        </div>

        {/* Rich Text Editor */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <label className="block text-sm font-medium">Blog Content *</label>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  const currentContent = editData?.content || "";
                  const newContent = currentContent + `
                    <h2>Key Takeaways</h2>
                    <div class="medical-block keypoints">
                      <h4>Key Points:</h4>
                      <ul>
                        <li>Important point 1</li>
                        <li>Important point 2</li>
                        <li>Important point 3</li>
                      </ul>
                    </div>
                  `;
                  setEditData({ ...editData, content: newContent });
                }}
                className="text-xs"
              >
                Add Key Points
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  const currentContent = editData?.content || "";
                  const newContent = currentContent + `
                    <h2>Pros and Cons</h2>
                    <div class="medical-block pros">
                      <h4>Pros:</h4>
                      <ul>
                        <li>Advantage 1</li>
                        <li>Advantage 2</li>
                      </ul>
                    </div>
                    <div class="medical-block cons">
                      <h4>Cons:</h4>
                      <ul>
                        <li>Disadvantage 1</li>
                        <li>Disadvantage 2</li>
                      </ul>
                    </div>
                  `;
                  setEditData({ ...editData, content: newContent });
                }}
                className="text-xs"
              >
                Add Pros/Cons
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  const currentContent = editData?.content || "";
                  const newContent = currentContent + `
                    <h2>Comparison Table</h2>
                    <table class="editor-table">
                      <tr>
                        <th>Feature</th>
                        <th>Option A</th>
                        <th>Option B</th>
                      </tr>
                      <tr>
                        <td>Feature 1</td>
                        <td>Description A</td>
                        <td>Description B</td>
                      </tr>
                      <tr>
                        <td>Feature 2</td>
                        <td>Description A</td>
                        <td>Description B</td>
                      </tr>
                    </table>
                  `;
                  setEditData({ ...editData, content: newContent });
                }}
                className="text-xs"
              >
                Add Table
              </Button>
            </div>
          </div>
          
          {/* Custom Rich Text Editor - Commented for testing
           <CustomRichTextEditor
             key={selectedBlog || 'new-blog'} // Force re-render when switching blogs
             value={editData?.content || ""}
             onChange={(content) => {
               setEditData({ ...editData, content: content });
             }}
             placeholder="Start writing your blog content here... Use the toolbar above for formatting, tables, and medical content blocks."
           />
          */}
          
          {/* Original RichTextEditor - Full Featured */}
          <RichTextEditor
            key={selectedBlog || 'new-blog'} // Force re-render when switching blogs
            value={editData?.content || ""}
            onChange={(content) => {
              setEditData({ ...editData, content: content });
            }}
          />
          
          {/* Editor Features Guide */}
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-800 mb-2">🎯 TinyMCE Rich Editor Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-blue-700">
              <div>
                <p className="font-medium mb-1">📝 Text Formatting:</p>
                <ul className="space-y-1 ml-2">
                  <li>• Bold, italic, underline, strikethrough</li>
                  <li>• Text and background colors</li>
                  <li>• Text alignment (left, center, right, justify)</li>
                  <li>• Headings (H1, H2, H3, H4)</li>
                  <li>• Lists and blockquotes</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">📊 Advanced Table Features:</p>
                <ul className="space-y-1 ml-2">
                  <li>• Full table creation and editing</li>
                  <li>• Add/remove rows and columns</li>
                  <li>• Cell borders and styling</li>
                  <li>• Table properties and cell properties</li>
                  <li>• Right-click context menu for tables</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">🎨 Professional Features:</p>
                <ul className="space-y-1 ml-2">
                  <li>• Image insertion and management</li>
                  <li>• Link creation and management</li>
                  <li>• Code view and fullscreen mode</li>
                  <li>• Template insertion</li>
                  <li>• Word count and character count</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">🏥 Medical Content:</p>
                <ul className="space-y-1 ml-2">
                  <li>• Pros/Cons sections with styling</li>
                  <li>• Key Points highlighted sections</li>
                  <li>• Medical content templates</li>
                  <li>• Professional formatting styles</li>
                  <li>• Custom medical block formats</li>
                </ul>
              </div>
            </div>
          </div>
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
      {/* CustomRichTextEditorDemo - Removed since we're now using the real editor */}
    </div>
      )}
    </>
  );
};

export default Page;
