import supabase from "@/lib/supabase/client";

export const uploadToSupabase = async (
  file: File | Blob,
  doctorId: string,
): Promise<string | null> => {
  const fileExt = (file instanceof File ? file.name : "image.jpg")
    .split(".")
    .pop();
  const fileName = `${doctorId}/${Date.now()}.${fileExt}`;

  const buffer = Buffer.from(await file.arrayBuffer());

  const { error } = await supabase.storage
    .from("doctor-profile-images")
    .upload(fileName, buffer, {
      contentType: file.type || "image/jpeg",
      upsert: true,
    });

  if (error) {
    console.error("Upload failed:", error);
    return null;
  }

  const { data } = supabase.storage
    .from("doctor-profile-images")
    .getPublicUrl(fileName);

  return data.publicUrl;
};

export async function uploadBlogImageToSupabase(
  file: File,
  slug: string,
): Promise<string | null> {
  if (!file || !slug) return null;

  const fileExt = file.name.split(".").pop();
  const filePath = `blog-images/${slug}.${fileExt}`;

  // Upload and overwrite existing image
  const { data, error } = await supabase.storage
    .from("blog-images")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: true,
    });

  if (error) {
    console.error("Error uploading image:", error.message);
    return null;
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from("blog-images").getPublicUrl(filePath);

  return publicUrl;
}
