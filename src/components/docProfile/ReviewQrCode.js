"use client";

import { useEffect, useState } from "react";
import { Check, Copy, Download, Printer, QrCode } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { track } from "@/lib/analytics";

// Printed codes must always open the live site, whatever environment
// generated them.
const LIVE_SITE = "https://www.bestorthopaedicsurgeon.com.au";
const TEAL = "#2f797b";
// Darker teal for the code itself: strong contrast keeps it easy to scan.
const QR_DARK = "#1d5254";

// Opens the profile at the review form; the utm tags show QR scans in Analytics.
export function reviewUrl(slug) {
  return `${LIVE_SITE}/doctor/${slug}?writeReview=true&utm_source=qr_code&utm_medium=print&utm_campaign=patient_reviews`;
}

async function makeQrSvg(url) {
  const QRCode = (await import("qrcode")).default;
  return QRCode.toString(url, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 2,
    color: { dark: QR_DARK, light: "#ffffff" },
  });
}

const escapeHtml = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// A4 counter sign in the BOS colours, printed from a hidden frame.
function printableSign({ name, designation, slug, svg }) {
  return `<!doctype html>
<html lang="en-AU"><head><meta charset="utf-8">
<title>Review ${escapeHtml(name)} on Best Orthopaedic Surgeon</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">
<style>
  @page { size: A4 portrait; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 210mm; height: 297mm; background: #fff; }
  body { font-family: 'DM Sans', Arial, sans-serif; color: #1f2a2b; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .page { width: 210mm; height: 297mm; padding: 14mm; display: flex; }
  .card { flex: 1; border: 2mm solid ${TEAL}; border-radius: 10mm; display: flex; flex-direction: column; align-items: center; text-align: center; padding: 14mm 14mm 10mm; }
  .brand { display: flex; align-items: center; gap: 4mm; color: ${TEAL}; }
  .brand b { font-family: 'Syne', Arial, sans-serif; font-weight: 800; font-size: 30pt; letter-spacing: 1pt; }
  .brand span { font-size: 13pt; font-weight: 500; text-align: left; line-height: 1.2; }
  h1 { font-family: 'Syne', Arial, sans-serif; font-weight: 700; font-size: 28pt; line-height: 1.25; margin-top: 12mm; }
  h1 .name { color: ${TEAL}; display: block; }
  .role { font-size: 13pt; color: #3a4647; margin-top: 2mm; }
  .lead { font-size: 15pt; margin-top: 7mm; color: #3a4647; max-width: 150mm; }
  .qr { width: 112mm; height: 112mm; margin-top: 9mm; border-radius: 4mm; border: 0.6mm solid #d5e4e4; padding: 3mm; }
  .qr svg { width: 100%; height: 100%; display: block; }
  .steps { display: flex; gap: 7mm; margin-top: 9mm; font-size: 12pt; }
  .steps li { list-style: none; display: flex; align-items: center; gap: 2.5mm; white-space: nowrap; }
  .steps b { background: ${TEAL}; color: #fff; border-radius: 50%; width: 7mm; height: 7mm; display: inline-flex; align-items: center; justify-content: center; font-size: 10pt; }
  .url { margin-top: auto; font-size: 12pt; color: ${TEAL}; font-weight: 700; }
  .foot { margin-top: 2mm; font-size: 10pt; color: #6b7677; }
</style></head>
<body><div class="page"><div class="card">
  <div class="brand"><b>BOS</b><span>Best Orthopaedic<br>Surgeon</span></div>
  <h1>Had your appointment with<span class="name">${escapeHtml(name)}?</span></h1>
  ${designation ? `<p class="role">${escapeHtml(designation)}</p>` : ""}
  <p class="lead">Scan the code to leave a review. Your feedback helps other patients choose with confidence.</p>
  <div class="qr">${svg}</div>
  <ol class="steps"><li><b>1</b>Open your phone camera</li><li><b>2</b>Scan the code</li><li><b>3</b>Rate and review</li></ol>
  <p class="url">bestorthopaedicsurgeon.com.au/doctor/${escapeHtml(slug)}</p>
  <p class="foot">Western Australia's orthopaedic surgeon directory</p>
</div></div></body></html>`;
}

function printSign(html) {
  const frame = document.createElement("iframe");
  frame.setAttribute("aria-hidden", "true");
  frame.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden";
  document.body.appendChild(frame);
  const doc = frame.contentDocument;
  doc.open();
  doc.write(html);
  doc.close();
  let printed = false;
  const go = async () => {
    if (printed) return;
    printed = true;
    try {
      await frame.contentDocument.fonts.ready;
    } catch {
      // Print with fallback fonts.
    }
    frame.contentWindow.focus();
    frame.contentWindow.print();
    setTimeout(() => frame.remove(), 1000);
  };
  frame.contentWindow.addEventListener("load", go);
  setTimeout(go, 2500); // in case the font stylesheet never loads
}

// "Review QR code" button for a surgeon profile: shows a QR code that opens
// the profile's review form, ready to print as a counter sign or download.
export default function ReviewQrCode({ slug, name, designation }) {
  const [open, setOpen] = useState(false);
  const [svg, setSvg] = useState("");
  const [failed, setFailed] = useState(false);
  const [copied, setCopied] = useState(false);
  const url = reviewUrl(slug);

  useEffect(() => {
    if (!open || svg) return;
    let alive = true;
    setFailed(false);
    makeQrSvg(url)
      .then((s) => alive && setSvg(s))
      .catch(() => alive && setFailed(true));
    return () => {
      alive = false;
    };
  }, [open, svg, url]);

  const onOpenChange = (next) => {
    setOpen(next);
    if (next) track("review_qr_open", { label: slug });
  };

  const print = () => {
    if (!svg) return;
    track("review_qr_print", { label: slug });
    printSign(printableSign({ name, designation, slug, svg }));
  };

  const download = () => {
    if (!svg) return;
    track("review_qr_download", { label: slug });
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `bos-review-qr-${slug}.svg`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this review link:", url);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="border-primary text-primary inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10"
        >
          <QrCode className="h-4 w-4" aria-hidden="true" />
          Review QR code
        </button>
      </DialogTrigger>
      {/* Above the Isla call widget, which sits at the top z-index. */}
      <DialogContent className="z-[2147483647] max-h-[calc(100dvh-1.5rem)] sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-primary text-[20px] font-[700]">Patient review QR code</DialogTitle>
          <DialogDescription className="text-[14px] text-[#555]">
            Print this and display it at reception. Patients scan it with their phone camera to review {name} on Best Orthopaedic Surgeon.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 flex flex-col items-center rounded-lg border border-[#d5e4e4] bg-white p-5 text-center">
          <p className="text-[13px] font-[600] text-[#737373]">Scan to review</p>
          <p className="text-primary text-[17px] font-[700]">{name}</p>
          {svg ? (
            <div
              role="img"
              aria-label={`QR code that opens ${name}'s review form on Best Orthopaedic Surgeon`}
              className="mt-3 h-52 w-52 [&_svg]:h-full [&_svg]:w-full"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          ) : failed ? (
            <p className="mt-3 flex h-52 w-52 items-center justify-center text-[13px] text-[#737373]">
              The QR code could not be created. Please close this and try again.
            </p>
          ) : (
            <div aria-hidden="true" className="mt-3 h-52 w-52 animate-pulse rounded bg-[#eef4f4]" />
          )}
          <p className="mt-3 text-[12px] break-all text-[#737373]">bestorthopaedicsurgeon.com.au/doctor/{slug}</p>
        </div>

        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
          <button
            type="button"
            onClick={print}
            disabled={!svg}
            className="bg-primary inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90 disabled:opacity-50"
          >
            <Printer className="h-4 w-4" aria-hidden="true" />
            Print
          </button>
          <button
            type="button"
            onClick={download}
            disabled={!svg}
            className="border-primary text-primary inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary/10 disabled:opacity-50"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download
          </button>
          <button
            type="button"
            onClick={copy}
            className="border-primary text-primary inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary/10"
          >
            {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
            <span aria-live="polite">{copied ? "Link copied" : "Copy link"}</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
