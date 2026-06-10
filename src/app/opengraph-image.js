import { renderOgImage, OG_SIZE } from "@/components/og/OgCard";

export const alt =
  "Best Orthopaedic Surgeons in Western Australia, a trusted orthopaedic surgeon directory";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage();
}
