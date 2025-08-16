export const getAllBlogsApi = async (queryParams = "") => {
  try {
    const res = await fetch(`/api/blogs?${queryParams}`, {
      method: "GET",
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || "Failed to fetch doctors");
    }

    return data.data;
  } catch (error) {
    console.error("API error (doctors):", error);
    return null;
  }
};

export const getBlogBySlugApi = async (slug) => {
  try {
    const res = await fetch(`/api/blogs/${slug}`, {
      method: "GET",
    });

    const data = await res.json();

    if (!res.ok) {
      if (res.status === 404) {
        // Blog not found - this is expected for slug availability checking
        return null;
      }
      throw new Error(data?.error || "Failed to fetch blog");
    }

    return data.data;
  } catch (error) {
    console.error("API error (blog):", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export const createBlogApi = async (blogData) => {
  try {
    const formData = new FormData();

    formData.append("title", blogData.title);
    formData.append("authorName", blogData.authorName);
    formData.append("content", blogData.content);
    formData.append("slug", blogData.slug);

    if (blogData.imageFile) {
      formData.append("image", blogData.imageFile); // actual File object
    }

    const res = await fetch("/api/blogs", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || "Failed to create blog");
    }

    return data.data;
  } catch (error) {
    console.error("API error (create blog):", error);
    return null;
  }
};

export const updateBlogApi = async (blogData) => {
  try {
    const formData = new FormData();

    formData.append("title", blogData.title);
    formData.append("authorName", blogData.authorName);
    formData.append("content", blogData.content);
    
    // Add the new slug to the form data
    if (blogData.newSlug) {
      formData.append("newSlug", blogData.newSlug);
    }

    if (blogData.imageFile) {
      formData.append("image", blogData.imageFile); // actual File object
    }

    // Use the old slug to find the blog to update
    const slugToUpdate = blogData.oldSlug || blogData.slug;
    
    const res = await fetch(`/api/blogs/${slugToUpdate}`, {
      method: "PATCH",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || "Failed to update blog");
    }

    return data.data;
  } catch (error) {
    console.error("API error (update blog):", error);
    return null;
  }
};

export const deleteBlogApi = async (slug) => {
  try {
    const res = await fetch(`/api/blogs/${slug}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || "Failed to delete blog");
    }

    return true;
  } catch (error) {
    console.error("API error (delete blog):", error);
    return null;
  }
};
