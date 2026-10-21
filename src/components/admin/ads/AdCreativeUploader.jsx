"use client";

import { FileText, Film, Image as ImageIcon, UploadCloud, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ICONS = {
  image: ImageIcon,
  video: Film,
  captions: FileText,
};

export default function AdCreativeUploader({
  label,
  description,
  accept,
  file,
  existingUrl,
  type = "image",
  required = false,
  onChange,
  onRemoveExisting,
}) {
  const Icon = ICONS[type] || UploadCloud;

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <label className="font-dm-sans text-sm font-semibold text-neutral-800">
            {label}{required && <span className="ml-1 text-red-600">*</span>}
          </label>
          <p className="mt-1 font-dm-sans text-xs leading-5 text-neutral-500">
            {description}
          </p>
        </div>
        <Icon aria-hidden="true" className="size-5 shrink-0 text-primary" />
      </div>

      {existingUrl && !file && (
        <div className="mb-3 overflow-hidden rounded-md border border-primary/15 bg-[#f3f6f5]">
          {type === "video" ? (
            <video src={existingUrl} className="max-h-40 w-full object-contain" muted playsInline />
          ) : type === "captions" ? (
            <div className="flex items-center gap-2 p-3 font-dm-sans text-sm text-neutral-600">
              <FileText className="size-4 text-primary" /> Captions uploaded
            </div>
          ) : (
            <img src={existingUrl} alt="Current campaign media" className="max-h-40 w-full object-contain" />
          )}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <label className="inline-flex min-h-9 cursor-pointer items-center gap-2 rounded-md border border-primary/30 bg-white px-3 py-2 font-dm-sans text-sm font-semibold text-primary transition hover:bg-primary/5 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
          <UploadCloud aria-hidden="true" className="size-4" />
          {file || existingUrl ? "Replace file" : "Choose file"}
          <input
            type="file"
            accept={accept}
            className="sr-only"
            onChange={(event) => onChange(event.target.files?.[0] || null)}
          />
        </label>
        {(file || existingUrl) && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="text-neutral-600"
            onClick={() => {
              onChange(null);
              if (!file && existingUrl) onRemoveExisting?.();
            }}
          >
            <X className="size-4" /> Remove
          </Button>
        )}
      </div>
      {file && (
        <p className="mt-3 truncate font-dm-sans text-xs text-neutral-600">
          Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
        </p>
      )}
    </div>
  );
}
