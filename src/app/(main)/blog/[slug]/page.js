import ProfileHeader from "@/components/reusable/profileHeader";
import { getBlogBySlugApi } from "@/lib/apiCalls/server/blogs";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import { JsonLd } from "@/components/seo/JsonLd";

const BLOG_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://www.bestorthopaedicsurgeon.com.au";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const response = await getBlogBySlugApi(slug);
  const blog = response?.data;

  if (!blog) {
    return {
      title: "Blog Not Found",
      robots: { index: false, follow: false },
    };
  }

  const plain = String(blog.content || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const description =
    (plain.length > 160 ? plain.slice(0, 157) + "..." : plain) ||
    "Read the latest orthopaedic health insights and surgical guidance from Best Orthopaedic Surgeons.";

  return {
    title: blog.title || "Blog",
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: blog.image
      ? {
          title: blog.title,
          description,
          url: `/blog/${slug}`,
          type: "article",
          images: [{ url: blog.image }],
        }
      : undefined,
  };
}

const Page = async ({ params }) => {
  const { slug } = params;
  const response = await getBlogBySlugApi(slug);
  const blog = response?.data;

  if (!blog) {
    return <div className="container">Blog not found.</div>;
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BLOG_BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BLOG_BASE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title || slug,
        item: `${BLOG_BASE_URL}/blog/${slug}`,
      },
    ],
  };

  // Format the date from API
  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";
    try {
      return format(new Date(dateString), "MMMM dd, yyyy");
    } catch (error) {
      return "Date not available";
    }
  };

  // CSS styles for published blog content - Match TinyMCE editor styles
  const blogContentStyles = `
    /* Base typography and spacing to match editor */
    .prose {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 16px;
      line-height: 1.6;
      color: #333;
    }

    /* Headings styling to match editor */
    .prose h1 {
      font-size: 2em !important;
      font-weight: bold !important;
      margin: 1em 0 0.5em 0 !important;
      color: #2c3e50 !important;
      line-height: 1.2 !important;
    }

    .prose h2 {
      font-size: 1.5em !important;
      font-weight: bold !important;
      margin: 1em 0 0.5em 0 !important;
      color: #34495e !important;
      line-height: 1.2 !important;
    }

    .prose h3 {
      font-size: 1.25em !important;
      font-weight: bold !important;
      margin: 1em 0 0.5em 0 !important;
      color: #34495e !important;
      line-height: 1.2 !important;
    }

    .prose h4 {
      font-size: 1.1em !important;
      font-weight: bold !important;
      margin: 1em 0 0.5em 0 !important;
      color: #34495e !important;
      line-height: 1.2 !important;
    }

    /* Paragraph spacing to match editor */
    .prose p {
      margin: 0 0 1em 0 !important;
      line-height: 1.6 !important;
    }

    /* Lists styling to match editor - THIS IS THE KEY FIX */
    .prose ul,
    .prose ol {
      margin: 0 0 1em 0 !important;
      padding-left: 1.5em !important;
      list-style-position: outside !important;
    }

    .prose ul {
      list-style-type: disc !important;
    }

    .prose ol {
      list-style-type: decimal !important;
    }

    .prose li {
      margin: 0.25em 0 !important;
      line-height: 1.6 !important;
      display: list-item !important;
    }

    /* Nested lists */
    .prose ul ul {
      margin: 0.25em 0 !important;
      padding-left: 1.5em !important;
    }

    .prose ol ol {
      margin: 0.25em 0 !important;
      padding-left: 1.5em !important;
    }

    /* Blockquote styling to match editor */
    .prose blockquote {
      border-left: 4px solid #83C5BE !important;
      margin: 1em 0 !important;
      padding: 0.5em 1em !important;
      background-color: #f8f9fa !important;
      font-style: italic !important;
    }

    /* Table styling for published blog content */
    .prose table {
      border-collapse: collapse !important;
      width: 100% !important;
      margin: 1em 0 !important;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      background: white;
      border: 1px solid #e5e7eb;
    }

    .prose table th {
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%) !important;
      font-weight: 700 !important;
      color: #1f2937 !important;
      text-transform: uppercase;
      font-size: 0.875rem !important;
      letter-spacing: 0.05em;
      border: 1px solid #ddd !important;
      padding: 12px !important;
      text-align: left !important;
    }

    .prose table td {
      background-color: #ffffff !important;
      border: 1px solid #ddd !important;
      padding: 12px !important;
      text-align: left !important;
      vertical-align: top;
      color: #000000 !important;
      transition: background-color 0.2s ease;
    }

    .prose table tr:nth-child(even) td {
      background-color: #fafafa !important;
    }

    .prose table tr:hover td {
      background-color: #f8fafc !important;
    }

    /* Medical content blocks styling to match editor custom classes */
    .prose .pros {
      background-color: #d4edda !important;
      border-left: 4px solid #28a745 !important;
      padding: 1em !important;
      margin: 1em 0 !important;
      border-radius: 4px;
    }

    .prose .cons {
      background-color: #f8d7da !important;
      border-left: 4px solid #dc3545 !important;
      padding: 1em !important;
      margin: 1em 0 !important;
      border-radius: 4px;
    }

    .prose .key-points {
      background-color: #e2e3e5 !important;
      border-left: 4px solid #6c757d !important;
      padding: 1em !important;
      margin: 1em 0 !important;
      border-radius: 4px;
    }

    /* Generic medical-block styling */
    .prose .medical-block {
      background-color: #f8f9fa !important;
      border: 1px solid #e9ecef !important;
      border-radius: 6px;
      padding: 1em !important;
      margin: 1em 0 !important;
    }

    .prose .medical-block.pros {
      background-color: #dcfce7 !important;
      border-left: 4px solid #16a34a !important;
    }

    .prose .medical-block.cons {
      background-color: #fef2f2 !important;
      border-left: 4px solid #dc2626 !important;
    }

    .prose .medical-block.keypoints {
      background-color: #f1f5f9 !important;
      border-left: 4px solid #64748b !important;
    }

    /* Image styling */
    .prose img,
    .prose .editor-image {
      max-width: 100% !important;
      height: auto !important;
      margin: 1em 0 !important;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    /* Link styling */
    .prose a,
    .prose .editor-link {
      color: #3b82f6 !important;
      text-decoration: underline !important;
      transition: color 0.2s;
    }

    .prose a:hover,
    .prose .editor-link:hover {
      color: #2563eb !important;
    }

    /* Ensure proper spacing between elements */
    .prose > * + * {
      margin-top: 0 !important;
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

    /* Ensure whitespace is preserved where needed */
    .prose pre {
      white-space: pre-wrap !important;
      word-wrap: break-word !important;
    }

    /* Strong and emphasis */
    .prose strong {
      font-weight: 700 !important;
    }

    .prose em {
      font-style: italic !important;
    }

    /* Ensure proper display of all content */
    .prose * {
      box-sizing: border-box;
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
      {/* ✅ Breadcrumb structured data */}
      <JsonLd data={breadcrumbSchema} />

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
        <div className="mb-8 w-full rounded-xl overflow-hidden">
          <img
            src={`${blog.image}?v=${Date.now()}`}
            alt={blog.title}
            className="w-full h-auto rounded-xl"
          />
        </div>
      )}

      {/* Author and Date Section */}
      <div className="mb-8 flex items-center gap-4 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
        <Image
          src="/bos_favicon.svg"
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
