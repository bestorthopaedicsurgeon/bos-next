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
      throw new Error(data?.error || "Failed to fetch blog");
    }

    return data.data;
  } catch (error) {
    console.error("API error (blog):", error);
    return null;
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

    if (blogData.imageFile) {
      formData.append("image", blogData.imageFile); // actual File object
    }

    const res = await fetch(`/api/blogs/${blogData.slug}`, {
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
