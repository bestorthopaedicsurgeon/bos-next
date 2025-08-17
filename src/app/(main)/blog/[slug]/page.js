import ProfileHeader from "@/components/reusable/profileHeader";
import { getBlogBySlugApi } from "@/lib/apiCalls/server/blogs";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";

export async function generateMetadata({ params }) {
  return {
    title: `Read Blog: ${params.slug}`,
  };
}

const Page = async ({ params }) => {
  const { slug } = params;
  const response = await getBlogBySlugApi(slug);
  const blog = response?.data;

  if (!blog) {
    return <div className="container">Blog not found.</div>;
  }

  // Format the date from API
  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";
    try {
      return format(new Date(dateString), "MMMM dd, yyyy");
    } catch (error) {
      return "Date not available";
    }
  };

  // CSS styles for published blog content, especially tables
  const blogContentStyles = `
    /* Table styling for published blog content */
    .prose table {
      border-collapse: collapse;
      width: 100%;
      margin: 2em 0;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      background: white;
      border: 1px solid #e5e7eb;
    }

    .prose table th {
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      font-weight: 700;
      color: #1f2937;
      text-transform: uppercase;
      font-size: 0.875rem;
      letter-spacing: 0.05em;
      border-bottom: 2px solid #d1d5db;
      padding: 16px;
      text-align: left;
      white-space: nowrap;
    }

    .prose table td {
      background-color: #ffffff;
      border-bottom: 1px solid #f3f4f6;
      padding: 16px;
      text-align: left;
      vertical-align: top;
      min-width: 120px;
      word-wrap: break-word;
      color: #000000;
      transition: background-color 0.2s ease;
    }

    .prose table tr:nth-child(even) td {
      background-color: #fafafa;
    }

    .prose table tr:hover td {
      background-color: #f8fafc;
    }

    /* Table wrapper styling */
    .prose div[style*="margin: 20px 0"] {
      margin: 20px 0 !important;
      width: 100%;
      overflow-x: auto;
    }

    /* Ensure tables are responsive */
    .prose table {
      min-width: 100%;
      table-layout: auto;
    }

    /* Medical content blocks styling */
    .prose .medical-block {
      background-color: #f8f9fa;
      border: 1px solid #e9ecef;
      border-radius: 6px;
      padding: 1em;
      margin: 1em 0;
    }

    .prose .medical-block.pros {
      background-color: #dcfce7;
      border-left: 4px solid #16a34a;
    }

    .prose .medical-block.cons {
      background-color: #fef2f2;
      border-left: 4px solid #dc2626;
    }

    .prose .medical-block.keypoints {
      background-color: #f1f5f9;
      border-left: 4px solid #64748b;
    }

    /* Image styling */
    .prose .editor-image {
      max-width: 100%;
      height: auto;
      margin: 1em 0;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    /* Link styling */
    .prose .editor-link {
      color: #3b82f6;
      text-decoration: underline;
      transition: color 0.2s;
    }

    .prose .editor-link:hover {
      color: #2563eb;
    }

    /* Force all tables to be completely non-editable */
    .prose table,
    .prose table *,
    .prose table th,
    .prose table td {
      -webkit-user-modify: read-only !important;
      -moz-user-modify: read-only !important;
      -ms-user-modify: read-only !important;
      user-modify: read-only !important;
      -webkit-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      user-select: text !important;
      pointer-events: auto !important;
      outline: none !important;
      cursor: default !important;
    }

    /* Remove any contenteditable attributes */
    .prose table[contenteditable],
    .prose table th[contenteditable],
    .prose table td[contenteditable] {
      contenteditable: false !important;
    }
  `;

  // JavaScript to completely disable editing on tables
  const disableTableEditing = `
    (function() {
      // Function to disable editing on all tables
      function disableTableEditing() {
        const tables = document.querySelectorAll('table');
        tables.forEach(table => {
          // Remove contenteditable attributes
          table.removeAttribute('contenteditable');
          table.setAttribute('contenteditable', 'false');
          
          // Disable editing on all table cells
          const cells = table.querySelectorAll('th, td');
          cells.forEach(cell => {
            cell.removeAttribute('contenteditable');
            cell.setAttribute('contenteditable', 'false');
            cell.style.userModify = 'read-only';
            cell.style.webkitUserModify = 'read-only';
            cell.style.mozUserModify = 'read-only';
            cell.style.msUserModify = 'read-only';
            cell.style.outline = 'none';
            cell.style.cursor = 'default';
          });
        });
      }

      // Run immediately
      disableTableEditing();
      
      // Run after DOM is fully loaded
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', disableTableEditing);
      }
      
      // Run after a short delay to catch any dynamic content
      setTimeout(disableTableEditing, 100);
      setTimeout(disableTableEditing, 500);
      setTimeout(disableTableEditing, 1000);
    })();
  `;

  return (
    <div className="container">
      {/* Inject CSS styles for blog content */}
      <style dangerouslySetInnerHTML={{ __html: blogContentStyles }} />
      
      {/* Inject JavaScript to disable table editing */}
      <script dangerouslySetInnerHTML={{ __html: disableTableEditing }} />
      
      <ProfileHeader heading={"Read Blog"} step1={"blog"} step2={slug} />
      
      {/* Blog Title */}
      <div className="mb-8 mt-10">
        <h1 className="font-syne text-primary font-bold leading-tight">
          {blog.title}
        </h1>
      </div>

      {/* Hero Image */}
      {blog?.image && (
        <div
          className="mb-8 h-[300px] w-full rounded-xl bg-contain bg-center bg-no-repeat sm:h-[400px] md:h-[500px] lg:h-[553px] xl:h-[553px]"
          style={{
            backgroundImage: `url(${blog?.image}?v=${Date.now()})`,
          }}
          role="img"
          aria-label={blog.title}
        />
      )}

      {/* Author and Date Section */}
      <div className="mb-8 flex items-center gap-4 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
        <Image
          src="/profile.png"
          width={60}
          height={60}
          alt="profile"
          className="h-14 w-14 rounded-full border-2 border-primary/20"
        />
        <div className="flex flex-col">
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {blog.authorName || "Author"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Published on {formatDate(blog.createdAt)}
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <article className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-syne prose-a:text-primary prose-strong:text-gray-900 dark:prose-invert dark:prose-headings:text-primary dark:prose-a:text-primary">
        <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      </article>
    </div>
  );
};

export default Page;
