"use client";

import { useEffect, useRef, useState } from "react";
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
import { doctorSpecialtyLabel } from "@/lib/utils";
import { A4, parseLogo, renderReviewSign, signPdfBlob, signPngBlob, signPrintHtml } from "./reviewSign";

// Printed codes must always open the live site, whatever environment
// generated them.
const LIVE_SITE = "https://www.bestorthopaedicsurgeon.com.au";
// Preview width in the dialog (fits a 320px phone), and the print and PDF
// width: 2480px across A4 is 300 dpi.
const PREVIEW_W = 254;
const FULL_W = 2480;

// Opens the profile at the review form; the utm tags show QR scans in Analytics.
export function reviewUrl(slug) {
  return `${LIVE_SITE}/doctor/${slug}?writeReview=true&utm_source=qr_code&utm_medium=print&utm_campaign=patient_reviews`;
}

async function loadAssets(url) {
  const [QRCode, logo] = await Promise.all([
    import("qrcode").then((mod) => mod.default),
    fetch("/logos/bos-mark.svg").then((res) => {
      if (!res.ok) throw new Error(`logo ${res.status}`);
      return res.text();
    }),
  ]);
  return { qr: QRCode.create(url, { errorCorrectionLevel: "M" }).modules, logo: parseLogo(logo) };
}

// For browsers that block the async clipboard API. The textarea goes inside
// the dialog so its focus trap does not pull focus away.
function legacyCopy(text, host) {
  const prev = document.activeElement;
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.cssText = "position:fixed;top:0;left:0;opacity:0;pointer-events:none";
  host.appendChild(ta);
  ta.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  ta.remove();
  // Selecting moved focus to the textarea; give it back to the button.
  prev?.focus?.({ preventScroll: true });
  return ok;
}

const isIos = () =>
  /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

// Opened inside the click, before the sign image is ready: iOS only allows
// a new tab straight from the tap, and it prints the whole page instead of a
// hidden frame, so the sign gets its own tab there.
function openPrintTarget() {
  if (isIos()) {
    const win = window.open("", "_blank");
    return win && { win, done: () => {} };
  }
  const frame = document.createElement("iframe");
  frame.setAttribute("aria-hidden", "true");
  frame.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden";
  document.body.appendChild(frame);
  return { win: frame.contentWindow, done: () => frame.remove() };
}

function printSign({ win, done }, src, title) {
  const doc = win.document;
  doc.open();
  doc.write(signPrintHtml(src, title));
  doc.close();
  let printed = false;
  let cleaned = false;
  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    done();
    URL.revokeObjectURL(src);
  };
  const go = () => {
    if (printed) return;
    printed = true;
    // Firefox and Safari return from print() before printing finishes.
    win.addEventListener("afterprint", () => setTimeout(cleanup, 500));
    win.focus();
    win.print();
    setTimeout(cleanup, 60000);
  };
  const img = doc.querySelector("img");
  if (img.complete) go();
  else {
    img.addEventListener("load", go);
    img.addEventListener("error", go);
  }
  setTimeout(go, 3000);
}

const outlineButton =
  "border-primary text-primary inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary/10 disabled:opacity-50";

// "QR Code" button for a surgeon profile: previews a branded A4 sign with a
// QR code that opens the profile's review form, to print for the clinic
// counter or download as a PDF.
export default function ReviewQrCode({ slug, name, designation }) {
  const [open, setOpen] = useState(false);
  const [assets, setAssets] = useState(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [busy, setBusy] = useState("");
  const [copied, setCopied] = useState(false);
  const [manualCopy, setManualCopy] = useState(false);
  const previewRef = useRef(null);
  const fullRef = useRef(null);
  const url = reviewUrl(slug);
  const specialty = doctorSpecialtyLabel(designation);
  const title = `BOS review sign, ${name}`;

  useEffect(() => {
    if (!open || assets) return;
    let alive = true;
    setFailed(false);
    loadAssets(url)
      .then((a) => alive && setAssets(a))
      .catch(() => alive && setFailed(true));
    return () => {
      alive = false;
    };
  }, [open, assets, url]);

  // Draws the preview at screen resolution once the dialog and assets are ready.
  useEffect(() => {
    const canvas = previewRef.current;
    if (!open || !assets || !canvas) return;
    let alive = true;
    const width = PREVIEW_W * Math.min(window.devicePixelRatio || 1, 3);
    renderReviewSign(canvas, { name, specialty, ...assets }, width)
      .then(() => alive && setReady(true))
      .catch(() => alive && setFailed(true));
    return () => {
      alive = false;
    };
  }, [open, assets, name, specialty]);

  // The full size sign, drawn once and shared by print and download.
  const fullSign = () => {
    fullRef.current ||= renderReviewSign(document.createElement("canvas"), { name, specialty, ...assets }, FULL_W);
    return fullRef.current;
  };

  const onOpenChange = (next) => {
    setOpen(next);
    if (next) track("review_qr_open", { label: slug });
    else {
      setReady(false);
      setManualCopy(false);
    }
  };

  const print = async () => {
    if (!ready || busy) return;
    track("review_qr_print", { label: slug });
    const target = openPrintTarget();
    if (!target) {
      window.alert("Please allow pop ups for this site to print the sign.");
      return;
    }
    setBusy("print");
    try {
      const png = await signPngBlob(await fullSign());
      printSign(target, URL.createObjectURL(png), title);
    } catch {
      target.done();
      fullRef.current = null;
      setFailed(true);
    } finally {
      setBusy("");
    }
  };

  const download = async () => {
    if (!ready || busy) return;
    track("review_qr_download", { label: slug });
    setBusy("download");
    try {
      const pdf = await signPdfBlob(await fullSign(), title);
      const a = document.createElement("a");
      a.href = URL.createObjectURL(pdf);
      a.download = `bos-review-sign-${slug}.pdf`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 10000);
    } catch {
      fullRef.current = null;
      setFailed(true);
    } finally {
      setBusy("");
    }
  };

  const copy = async (e) => {
    const host = e.currentTarget.parentElement;
    let ok = false;
    try {
      await navigator.clipboard.writeText(url);
      ok = true;
    } catch {
      ok = legacyCopy(url, host);
    }
    if (!ok) return setManualCopy(true);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="QR Code for patient reviews"
          className="border-primary text-primary inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border bg-white px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-primary/10"
        >
          <QrCode className="h-4 w-4" aria-hidden="true" />
          QR Code
        </button>
      </DialogTrigger>
      {/* Above the Isla call widget, which sits at the top z-index. */}
      <DialogContent className="z-[2147483647] max-h-[calc(100dvh-1.5rem)] sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-primary text-[20px] font-[700]">Patient review QR code</DialogTitle>
          <DialogDescription className="text-[14px] text-[#555]">
            Print this sign for your reception desk. Patients scan the code with their phone camera to review {name}.
          </DialogDescription>
        </DialogHeader>

        <div
          className="relative mx-auto overflow-hidden rounded-[4px] bg-white shadow-[0_4px_18px_rgba(31,42,43,0.16)] ring-1 ring-black/5"
          style={{ width: PREVIEW_W, height: (PREVIEW_W * A4.h) / A4.w }}
          aria-busy={!ready && !failed}
        >
          <canvas
            ref={previewRef}
            role="img"
            aria-label={`Printable A4 sign with a QR code that opens ${name}'s review form`}
            className={`block h-full w-full transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`}
          />
          {failed ? (
            <p
              role="alert"
              className="absolute inset-0 flex items-center justify-center bg-white p-6 text-center text-[13px] text-[#737373]"
            >
              The sign could not be created. Please close this and try again.
            </p>
          ) : (
            !ready && <div aria-hidden="true" className="absolute inset-0 animate-pulse bg-[#eef4f4]" />
          )}
        </div>

        <div className="mt-2 grid grid-cols-1 gap-2 min-[360px]:grid-cols-2">
          <button
            type="button"
            onClick={print}
            disabled={!ready || !!busy}
            className="bg-primary inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90 disabled:opacity-50 min-[360px]:col-span-2"
          >
            <Printer className="h-4 w-4" aria-hidden="true" />
            {busy === "print" ? "Preparing…" : "Print sign"}
          </button>
          <button type="button" onClick={download} disabled={!ready || !!busy} className={outlineButton}>
            <Download className="h-4 w-4" aria-hidden="true" />
            {busy === "download" ? "Preparing…" : "Download PDF"}
          </button>
          <button type="button" onClick={copy} className={outlineButton}>
            {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
            <span aria-live="polite">{copied ? "Link copied" : "Copy link"}</span>
          </button>
          {manualCopy && (
            <input
              readOnly
              autoFocus
              value={url}
              aria-label="Review link, copy it from here"
              onFocus={(e) => e.target.select()}
              className="w-full rounded-md border border-[#d5e4e4] bg-white px-3 py-2 text-[12px] text-[#555] min-[360px]:col-span-2"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
