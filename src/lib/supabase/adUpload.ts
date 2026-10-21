import supabase from "@/lib/supabase/client";

export const AD_MEDIA_BUCKET = "bos-ad-media";

const MB = 1024 * 1024;

const MEDIA_RULES = {
  desktopImage: {
    folder: "desktop",
    maxBytes: 2 * MB,
    mimeTypes: ["image/webp", "image/jpeg", "image/png"],
    minWidth: 300,
    minHeight: 50,
  },
  mobileImage: {
    folder: "mobile",
    maxBytes: 1 * MB,
    mimeTypes: ["image/webp", "image/jpeg", "image/png"],
    minWidth: 300,
    minHeight: 50,
  },
  video: {
    folder: "video",
    maxBytes: 25 * MB,
    mimeTypes: ["video/mp4", "video/webm"],
  },
  poster: {
    folder: "poster",
    maxBytes: 1 * MB,
    mimeTypes: ["image/webp", "image/jpeg", "image/png"],
    minWidth: 320,
    minHeight: 180,
  },
  captions: {
    folder: "captions",
    maxBytes: 250 * 1024,
    mimeTypes: ["text/vtt", "text/plain", "application/octet-stream"],
  },
} as const;

export type AdMediaKind = keyof typeof MEDIA_RULES;

// Upload kind -> AdCampaign column holding the object path.
export const AD_MEDIA_FIELDS: Record<AdMediaKind, string> = {
  desktopImage: "desktopImagePath",
  mobileImage: "mobileImagePath",
  video: "videoPath",
  poster: "posterPath",
  captions: "captionsPath",
};

const MAX_IMAGE_SIDE = 5000;

type Sniffed = { type: string; width?: number; height?: number };

// The file's real format (and an image's pixel size) read from its bytes, so
// an upload is never trusted on its declared type alone.
function sniff(bytes: Buffer): Sniffed | null {
  if (bytes.length >= 24 && bytes.readUInt32BE(0) === 0x89504e47 && bytes.readUInt32BE(4) === 0x0d0a1a0a) {
    return { type: "image/png", width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
  }
  if (bytes.length >= 4 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    let offset = 2;
    while (offset + 9 < bytes.length) {
      if (bytes[offset] !== 0xff) { offset += 1; continue; }
      const marker = bytes[offset + 1];
      const length = bytes.readUInt16BE(offset + 2);
      const isFrame = marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker);
      if (isFrame) {
        return { type: "image/jpeg", height: bytes.readUInt16BE(offset + 5), width: bytes.readUInt16BE(offset + 7) };
      }
      offset += 2 + length;
    }
    return { type: "image/jpeg" };
  }
  if (bytes.length >= 30 && bytes.toString("ascii", 0, 4) === "RIFF" && bytes.toString("ascii", 8, 12) === "WEBP") {
    const chunk = bytes.toString("ascii", 12, 16);
    if (chunk === "VP8X") {
      return { type: "image/webp", width: 1 + bytes.readUIntLE(24, 3), height: 1 + bytes.readUIntLE(27, 3) };
    }
    if (chunk === "VP8 ") {
      return { type: "image/webp", width: bytes.readUInt16LE(26) & 0x3fff, height: bytes.readUInt16LE(28) & 0x3fff };
    }
    if (chunk === "VP8L") {
      const bits = bytes.readUInt32LE(21);
      return { type: "image/webp", width: 1 + (bits & 0x3fff), height: 1 + ((bits >> 14) & 0x3fff) };
    }
    return { type: "image/webp" };
  }
  if (bytes.length >= 12 && bytes.toString("ascii", 4, 8) === "ftyp") return { type: "video/mp4" };
  if (bytes.length >= 4 && bytes.readUInt32BE(0) === 0x1a45dfa3) return { type: "video/webm" };
  const text = bytes.toString("utf8", 0, 16).replace(/^﻿/, "");
  if (text.startsWith("WEBVTT")) return { type: "text/vtt" };
  return null;
}

export async function ensureAdMediaBucket() {
  const { data, error } = await supabase.storage.listBuckets();
  if (error) throw new Error(`Unable to inspect ad storage: ${error.message}`);

  if (data.some((bucket) => bucket.name === AD_MEDIA_BUCKET)) return;

  const { error: createError } = await supabase.storage.createBucket(
    AD_MEDIA_BUCKET,
    {
      public: true,
      fileSizeLimit: 25 * MB,
      allowedMimeTypes: [
        "image/webp",
        "image/jpeg",
        "image/png",
        "video/mp4",
        "video/webm",
        "text/vtt",
      ],
    },
  );

  if (createError && !createError.message.toLowerCase().includes("already")) {
    throw new Error(`Unable to create ad storage: ${createError.message}`);
  }
}

// Checks size, declared type and the real format (plus image dimensions).
// Returns the verified content type to store the object with.
export function validateAdMediaFile(file: File, kind: AdMediaKind, bytes: Buffer) {
  const rules = MEDIA_RULES[kind];
  if (!rules) throw new Error("Unsupported advertising media type.");
  if (!(file instanceof File) || file.size === 0) {
    throw new Error("Choose a non-empty file to upload.");
  }

  const isVtt = kind === "captions" && file.name.toLowerCase().endsWith(".vtt");
  if (!(rules.mimeTypes as readonly string[]).includes(file.type) || (kind === "captions" && !isVtt)) {
    throw new Error(`The selected ${kind} file type is not supported.`);
  }
  if (file.size > rules.maxBytes) {
    const limit = rules.maxBytes >= MB
      ? `${rules.maxBytes / MB} MB`
      : `${Math.round(rules.maxBytes / 1024)} KB`;
    throw new Error(`The selected ${kind} file must be ${limit} or smaller.`);
  }

  const sniffed = sniff(bytes);
  const expected = kind === "captions" ? ["text/vtt"] : (rules.mimeTypes as readonly string[]);
  if (!sniffed || !expected.includes(sniffed.type)) {
    throw new Error(`${file.name} is not a valid ${kind === "captions" ? "WebVTT" : file.type.split("/")[0]} file.`);
  }

  if ("minWidth" in rules && sniffed.width && sniffed.height) {
    const { width, height } = sniffed;
    if (width < rules.minWidth || height < rules.minHeight) {
      throw new Error(`${file.name} is ${width}x${height}. It must be at least ${rules.minWidth}x${rules.minHeight} pixels.`);
    }
    if (width > MAX_IMAGE_SIDE || height > MAX_IMAGE_SIDE) {
      throw new Error(`${file.name} is ${width}x${height}. Each side must be ${MAX_IMAGE_SIDE} pixels or less.`);
    }
  }
  return sniffed.type;
}

const EXTENSIONS: Record<string, string> = {
  "image/webp": "webp",
  "image/jpeg": "jpg",
  "image/png": "png",
  "video/mp4": "mp4",
  "video/webm": "webm",
  "text/vtt": "vtt",
};

export async function uploadAdMedia({
  file,
  advertiserId,
  campaignId,
  kind,
}: {
  file: File;
  advertiserId: string;
  campaignId: string;
  kind: AdMediaKind;
}) {
  const buffer = Buffer.from(await file.arrayBuffer());
  const contentType = validateAdMediaFile(file, kind, buffer);
  await ensureAdMediaBucket();

  const rules = MEDIA_RULES[kind];
  const objectPath = `advertisers/${advertiserId}/campaigns/${campaignId}/${rules.folder}/${crypto.randomUUID()}.${EXTENSIONS[contentType]}`;

  const { error } = await supabase.storage
    .from(AD_MEDIA_BUCKET)
    .upload(objectPath, buffer, {
      contentType,
      cacheControl: "31536000",
      upsert: false,
    });

  if (error) throw new Error(`Upload failed: ${error.message}`);

  return {
    path: objectPath,
    publicUrl: getAdMediaPublicUrl(objectPath),
    originalFileName: file.name,
  };
}

// Copies an object into another campaign's folder (used to duplicate a
// campaign with its creative). Returns the new object path.
export async function copyAdMedia(path: string, advertiserId: string, campaignId: string) {
  const folder = path.split("/").slice(-2, -1)[0];
  const extension = path.split(".").pop();
  const target = `advertisers/${advertiserId}/campaigns/${campaignId}/${folder}/${crypto.randomUUID()}.${extension}`;
  const { error } = await supabase.storage.from(AD_MEDIA_BUCKET).copy(path, target);
  if (error) throw new Error(`Unable to copy campaign media: ${error.message}`);
  return target;
}

export function getAdMediaPublicUrl(path?: string | null) {
  if (!path) return null;
  const { data } = supabase.storage.from(AD_MEDIA_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

export async function removeAdMedia(path?: string | null) {
  if (!path) return;
  const { error } = await supabase.storage.from(AD_MEDIA_BUCKET).remove([path]);
  if (error) console.error("Unable to remove superseded ad media:", error.message);
}
