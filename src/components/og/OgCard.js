import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

// Shared 1200x630 social card, rendered to PNG so it works on every
// platform (Facebook / LinkedIn / X / WhatsApp all reject SVG og:images).
// Used by both opengraph-image.js and twitter-image.js.

export const OG_SIZE = { width: 1200, height: 630 };

const TEAL = "#2f797b";
const TEAL_DARK = "#225a5c";
const CREAM = "#ede7e3";
const INK = "#26303a";

export function renderOgImage() {
  // Read the brand logo from disk. Wrapped in try/catch so that if the asset
  // can't be read in some environment, the route degrades to a text-only card
  // (HTTP 200) instead of failing the whole image route with a 500.
  let logoSrc = null;
  try {
    const logo = readFileSync(
      join(process.cwd(), "public/logos/bos-logo-1.png")
    ).toString("base64");
    logoSrc = `data:image/png;base64,${logo}`;
  } catch {
    logoSrc = null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: CREAM,
          backgroundImage:
            "radial-gradient(circle at 88% 14%, rgba(47,121,123,0.12) 0%, rgba(47,121,123,0) 40%)",
          fontFamily: "sans-serif",
          position: "relative",
          padding: "72px 84px",
        }}
      >
        {/* left brand accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 16,
            backgroundColor: TEAL,
            display: "flex",
          }}
        />

        {/* faint medical cross watermark */}
        <div
          style={{
            position: "absolute",
            top: 56,
            right: 92,
            display: "flex",
            color: "rgba(47,121,123,0.13)",
            fontSize: 230,
            lineHeight: 1,
          }}
        >
          +
        </div>

        {/* logo (or text fallback if the asset is unavailable) */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {logoSrc ? (
            <img src={logoSrc} height={96} alt="BOS" />
          ) : (
            <div
              style={{
                display: "flex",
                fontSize: 40,
                fontWeight: 700,
                color: TEAL,
                letterSpacing: "1px",
              }}
            >
              BOS · Best Orthopaedic Surgeons
            </div>
          )}
        </div>

        {/* headline block, anchored to bottom */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 74,
              fontWeight: 700,
              color: INK,
              lineHeight: 1.04,
              letterSpacing: "-1.5px",
              maxWidth: 900,
            }}
          >
            Best Orthopaedic Surgeons
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: TEAL_DARK,
              marginTop: 22,
              maxWidth: 880,
              lineHeight: 1.3,
            }}
          >
            {"Western Australia's trusted directory of orthopaedic surgeons"}
          </div>
        </div>

        {/* bottom row: CTA pill + domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 46,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: TEAL,
              color: "#ffffff",
              fontSize: 26,
              fontWeight: 600,
              padding: "16px 32px",
              borderRadius: 999,
            }}
          >
            Find a surgeon near you
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              fontSize: 26,
              color: TEAL_DARK,
              fontWeight: 600,
            }}
          >
            bestorthopaedicsurgeon.com.au
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
