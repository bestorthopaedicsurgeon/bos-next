// The printable A4 counter sign that asks patients to review a surgeon on
// BOS. Drawn on a canvas, so the dialog preview, the printout and the PDF
// download are the same image. Layout is in millimetres on an A4 page.

const TEAL = "#2f797b";
const TEAL_FADED = "rgba(47, 121, 123, 0.45)";
const TEAL_LIGHT = "#e9f2f2";
const INK = "#292a39";
const MUTED = "#5f6470";
const GOLD = "#F3CD03";
// Darker teal for the code itself: strong contrast keeps it easy to scan.
const QR_DARK = "#1d5254";
const STAR =
  "M14.9356 5.44571C14.8894 5.30974 14.8045 5.19027 14.6912 5.10204C14.5779 5.01381 14.4413 4.96069 14.2981 4.94924L10.1111 4.61654L8.29929 0.605809C8.24159 0.476631 8.14773 0.366914 8.02905 0.289898C7.91037 0.212883 7.77194 0.171861 7.63046 0.171784C7.48898 0.171706 7.3505 0.212576 7.23174 0.289461C7.11297 0.366346 7.019 0.47596 6.96115 0.605074L5.14931 4.61654L0.962319 4.94924C0.821643 4.96038 0.687156 5.01182 0.574947 5.09739C0.462738 5.18297 0.37756 5.29906 0.329602 5.43178C0.281643 5.5645 0.272936 5.70822 0.304522 5.84576C0.336108 5.9833 0.406649 6.10882 0.507706 6.20732L3.60187 9.22363L2.50756 13.9622C2.47434 14.1056 2.48498 14.2557 2.53813 14.393C2.59127 14.5303 2.68446 14.6485 2.8056 14.7322C2.92673 14.8159 3.07022 14.8612 3.21745 14.8623C3.36468 14.8635 3.50885 14.8203 3.63124 14.7385L7.63022 12.0725L11.6292 14.7385C11.7543 14.8215 11.9018 14.8643 12.052 14.861C12.2021 14.8577 12.3476 14.8085 12.4689 14.7201C12.5903 14.6316 12.6816 14.5081 12.7307 14.3662C12.7797 14.2242 12.7841 14.0707 12.7433 13.9262L11.4001 9.22583L14.7314 6.22788C14.9496 6.03105 15.0296 5.72406 14.9356 5.44571Z";

const SANS = "'DM Sans', Arial, sans-serif";
const DISPLAY = "'Syne', Arial, sans-serif";
const FONTS_CSS =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;600;700&family=Syne:wght@600;700&display=block";

export const A4 = { w: 210, h: 297 }; // mm
const PT = 25.4 / 72; // mm per point
const EYEBROW = "PATIENT FEEDBACK";
const HEADLINE = "How was your appointment with";
const STEPS = ["Open your phone camera", "Scan the code", "Leave your review"];
const BAND = ["Your review helps other patients choose with confidence.", "Thank you!"];

// Card geometry (mm): 10mm page margin, 0.7mm border, 7mm corner radius.
const CARD = { x: 10, y: 10, w: 190, h: 277, r: 7, border: 0.7 };
const PAD = { top: 15, side: 14 };

const escapeHtml = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// Long names step down so they stay on one or two lines.
const nameSize = (name) => (name.length <= 18 ? 34 : name.length <= 24 ? 29 : 25);

// The BOS mark from public/logos/bos-mark.svg (one path, no transforms).
export function parseLogo(svgText) {
  const box = svgText.match(/viewBox="([^"]+)"/)[1].split(/[\s,]+/).map(Number);
  const d = svgText.match(/\sd="([^"]+)"/)[1];
  return { box, path: new Path2D(d) };
}

// Adds the sign's Google Fonts to the page so the canvas can draw with them.
// Never rejects: without the fonts the sign falls back to Arial.
let fontsCss;
export function loadSignFonts() {
  fontsCss ||= new Promise((resolve) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FONTS_CSS;
    link.onload = link.onerror = resolve;
    document.head.appendChild(link);
  });
  return fontsCss;
}

async function fontsFor(name, specialty) {
  await loadSignFonts();
  const sans = `${EYEBROW} ${specialty || ""} ${STEPS.join(" ")} 123 ${BAND.join(" ")}`;
  const display = `${HEADLINE} ${name}?`;
  const loads = [
    document.fonts.load(`500 20px ${SANS}`, sans),
    document.fonts.load(`600 20px ${SANS}`, sans),
    document.fonts.load(`700 20px ${SANS}`, sans),
    document.fonts.load(`600 20px ${DISPLAY}`, display),
    document.fonts.load(`700 20px ${DISPLAY}`, display),
  ];
  await Promise.race([Promise.all(loads).catch(() => {}), new Promise((r) => setTimeout(r, 4000))]);
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// Ascent and descent of the current font, for CSS style line boxes.
function metrics(ctx) {
  const m = ctx.measureText("Hg");
  return {
    asc: m.fontBoundingBoxAscent ?? m.actualBoundingBoxAscent,
    desc: m.fontBoundingBoxDescent ?? m.actualBoundingBoxDescent,
  };
}

// Baseline for text vertically centred in a line box (as CSS does).
function baseline(ctx, top, lineHeight) {
  const { asc, desc } = metrics(ctx);
  return top + (lineHeight - (asc + desc)) / 2 + asc;
}

function wrap(ctx, text, maxWidth) {
  const lines = [];
  let line = "";
  for (const word of text.split(" ")) {
    const next = line ? `${line} ${word}` : word;
    if (line && ctx.measureText(next).width > maxWidth) {
      lines.push(line);
      line = word;
    } else line = next;
  }
  lines.push(line);
  return lines;
}

// Draws the sign onto canvas at widthPx wide (2480px is 300 dpi).
// qr is the module matrix from QRCode.create(url).modules.
export function drawReviewSign(canvas, { name, specialty, qr, logo }, widthPx) {
  const k = widthPx / A4.w; // px per mm
  const m = (mm) => mm * k;
  const font = (weight, pt, family) => `${weight} ${m(pt * PT)}px ${family}`;
  canvas.width = Math.round(m(A4.w));
  canvas.height = Math.round(m(A4.h));
  const ctx = canvas.getContext("2d");
  const cx = m(A4.w / 2);
  const inner = {
    x: CARD.x + CARD.border,
    y: CARD.y + CARD.border,
    w: CARD.w - 2 * CARD.border,
    h: CARD.h - 2 * CARD.border,
    r: CARD.r - CARD.border,
  };

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Measure the text blocks first, so the QR code can give way if a long
  // name needs two lines.
  ctx.font = font(700, 10, SANS);
  const eyebrow = metrics(ctx);
  const eyebrowH = eyebrow.asc + eyebrow.desc;
  let size = nameSize(name);
  let nameLines;
  for (;;) {
    ctx.font = font(700, size, DISPLAY);
    nameLines = wrap(ctx, `${name}?`, m(168));
    if (nameLines.length <= 2 || size <= 18) break;
    size -= 2;
  }
  const nameLH = m(size * PT * 1.12);
  ctx.font = font(500, 12.5, SANS);
  const role = metrics(ctx);
  const roleH = specialty ? m(2.5) + role.asc + role.desc : 0;
  const headlineLH = m(21 * PT * 1.2);
  const logoW = m(64);
  const logoH = (logoW * logo.box[3]) / logo.box[2];
  const pillH = m(10.9);
  const bandLH = m(13 * PT * 1.4);
  const bandTop = m(inner.y + inner.h) - (m(14) + 2 * bandLH);
  const top = m(inner.y + PAD.top);
  const fixed =
    logoH + m(10) + eyebrowH + m(6) + headlineLH + m(1.5) + nameLH * nameLines.length + roleH +
    m(7) + m(8) + m(8) + m(8) + pillH;
  const qrWrap = Math.max(m(90), Math.min(m(110), bandTop - m(7) - top - fixed));

  // Band along the bottom, clipped to the card's rounded corners.
  ctx.save();
  roundRect(ctx, m(inner.x), m(inner.y), m(inner.w), m(inner.h), m(inner.r));
  ctx.clip();
  ctx.fillStyle = TEAL;
  ctx.fillRect(m(inner.x), bandTop, m(inner.w), m(inner.y + inner.h) - bandTop);
  ctx.restore();
  roundRect(
    ctx,
    m(CARD.x + CARD.border / 2),
    m(CARD.y + CARD.border / 2),
    m(CARD.w - CARD.border),
    m(CARD.h - CARD.border),
    m(CARD.r - CARD.border / 2),
  );
  ctx.lineWidth = m(CARD.border);
  ctx.strokeStyle = TEAL;
  ctx.stroke();

  let y = top;

  // Logo.
  ctx.save();
  ctx.translate(cx - logoW / 2, y);
  const s = logoW / logo.box[2];
  ctx.scale(s, s);
  ctx.translate(-logo.box[0], -logo.box[1]);
  ctx.fillStyle = TEAL;
  ctx.fill(logo.path, "evenodd");
  ctx.restore();
  y += logoH + m(10);

  // Eyebrow: letter spaced, with a short rule either side.
  ctx.font = font(700, 10, SANS);
  ctx.textAlign = "left";
  ctx.fillStyle = TEAL;
  const track = m(10 * PT * 0.35);
  const chars = [...EYEBROW];
  const widths = chars.map((c) => ctx.measureText(c).width);
  const eyebrowW = widths.reduce((a, b) => a + b, 0) + track * (chars.length - 1);
  let x = cx - eyebrowW / 2;
  const eyebrowBase = y + eyebrow.asc;
  chars.forEach((c, i) => {
    ctx.fillText(c, x, eyebrowBase);
    x += widths[i] + track;
  });
  ctx.fillStyle = TEAL_FADED;
  const ruleY = y + eyebrowH / 2 - m(0.2);
  ctx.fillRect(cx - eyebrowW / 2 - m(16), ruleY, m(12), m(0.4));
  ctx.fillRect(cx + eyebrowW / 2 + m(4), ruleY, m(12), m(0.4));
  y += eyebrowH + m(6);

  // Headline, name and specialty.
  ctx.textAlign = "center";
  ctx.font = font(600, 21, DISPLAY);
  ctx.fillStyle = INK;
  ctx.fillText(HEADLINE, cx, baseline(ctx, y, headlineLH));
  y += headlineLH + m(1.5);
  ctx.font = font(700, size, DISPLAY);
  ctx.fillStyle = TEAL;
  nameLines.forEach((line) => {
    ctx.fillText(line, cx, baseline(ctx, y, nameLH));
    y += nameLH;
  });
  if (specialty) {
    y += m(2.5);
    ctx.font = font(500, 12.5, SANS);
    ctx.fillStyle = MUTED;
    ctx.fillText(specialty, cx, y + role.asc);
    y += role.asc + role.desc;
  }

  // Five stars.
  y += m(7);
  const star = new Path2D(STAR);
  ctx.fillStyle = GOLD;
  for (let i = 0; i < 5; i++) {
    ctx.save();
    ctx.translate(cx - m(25) + i * m(10.5), y);
    ctx.scale(m(8) / 15, m(8) / 15);
    ctx.fill(star);
    ctx.restore();
  }
  y += m(8) + m(8);

  // QR code inside four corner brackets.
  const qx = cx - qrWrap / 2;
  const arm = m(15);
  const th = m(1.6);
  const rad = m(5) - th / 2;
  const o = th / 2;
  ctx.strokeStyle = TEAL;
  ctx.lineWidth = th;
  ctx.lineCap = "butt";
  for (const [sx, sy] of [[0, 0], [1, 0], [0, 1], [1, 1]]) {
    const cxr = qx + (sx ? qrWrap - o : o);
    const cyr = y + (sy ? qrWrap - o : o);
    const dx = sx ? -1 : 1;
    const dy = sy ? -1 : 1;
    ctx.beginPath();
    ctx.moveTo(cxr, cyr + dy * (arm - o));
    ctx.arcTo(cxr, cyr, cxr + dx * rad, cyr, rad);
    ctx.lineTo(cxr + dx * (arm - o), cyr);
    ctx.stroke();
  }
  const pad = qrWrap * (6 / 110);
  const units = qr.size + 4; // 2 module quiet zone inside the brackets
  const u = (qrWrap - 2 * pad) / units;
  ctx.fillStyle = QR_DARK;
  ctx.beginPath(); // one path, so neighbouring modules have no hairline seams
  for (let r = 0; r < qr.size; r++) {
    for (let c = 0; c < qr.size; c++) {
      if (!qr.get(r, c)) continue;
      let run = 1;
      while (c + run < qr.size && qr.get(r, c + run)) run++;
      ctx.rect(qx + pad + (c + 2) * u, y + pad + (r + 2) * u, run * u, u);
      c += run - 1;
    }
  }
  ctx.fill();
  y += qrWrap + m(8);

  // Three steps as pills.
  ctx.font = font(600, 11, SANS);
  const textW = STEPS.map((t) => ctx.measureText(t).width);
  const dot = m(6.5);
  const pillW = textW.map((w) => m(2.2) + dot + m(2.5) + w + m(4.5));
  x = cx - (pillW.reduce((a, b) => a + b, 0) + m(4) * (STEPS.length - 1)) / 2;
  const mid = y + pillH / 2;
  STEPS.forEach((text, i) => {
    ctx.fillStyle = TEAL_LIGHT;
    roundRect(ctx, x, y, pillW[i], pillH, pillH / 2);
    ctx.fill();
    ctx.fillStyle = TEAL;
    ctx.beginPath();
    ctx.arc(x + m(2.2) + dot / 2, mid, dot / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = font(700, 9.5, SANS);
    ctx.textAlign = "center";
    ctx.fillStyle = "#fff";
    let { asc, desc } = metrics(ctx);
    ctx.fillText(String(i + 1), x + m(2.2) + dot / 2, mid + (asc - desc) / 2);
    ctx.font = font(600, 11, SANS);
    ctx.textAlign = "left";
    ctx.fillStyle = INK;
    ({ asc, desc } = metrics(ctx));
    ctx.fillText(text, x + m(2.2) + dot + m(2.5), mid + (asc - desc) / 2);
    x += pillW[i] + m(4);
  });

  // Thank you band text.
  ctx.textAlign = "center";
  ctx.font = font(500, 13, SANS);
  ctx.fillStyle = "#fff";
  BAND.forEach((line, i) => {
    const lineTop = bandTop + m(7) + i * bandLH;
    ctx.fillText(line, cx, baseline(ctx, lineTop, bandLH));
  });
}

// Loads the fonts the sign needs, then draws it.
export async function renderReviewSign(canvas, data, widthPx) {
  await fontsFor(data.name, data.specialty);
  drawReviewSign(canvas, data, widthPx);
  return canvas;
}

const toBlob = (canvas, type, quality) =>
  new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Could not encode the sign"))), type, quality),
  );

export const signPngBlob = (canvas) => toBlob(canvas, "image/png");

// A one page A4 PDF holding the sign as a high quality JPEG.
export async function signPdfBlob(canvas, title) {
  const jpeg = new Uint8Array(await (await toBlob(canvas, "image/jpeg", 0.95)).arrayBuffer());
  const W = 595.28; // A4 in points
  const H = 841.89;
  const enc = new TextEncoder();
  const chunks = [];
  const offsets = [];
  let size = 0;
  const add = (part) => {
    const bytes = typeof part === "string" ? enc.encode(part) : part;
    chunks.push(bytes);
    size += bytes.length;
  };
  const text = (s) => `(${String(s).replace(/[^\x20-\x7e]/g, "").replace(/[\\()]/g, "\\$&")})`;
  const content = `q ${W} 0 0 ${H} 0 0 cm /Im0 Do Q`;
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>`,
    null, // the image, written below
    `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
    `<< /Title ${text(title)} >>`,
  ];
  add("%PDF-1.4\n%âãÏÓ\n");
  objects.forEach((body, i) => {
    offsets.push(size);
    add(`${i + 1} 0 obj\n`);
    if (body === null) {
      add(
        `<< /Type /XObject /Subtype /Image /Width ${canvas.width} /Height ${canvas.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n`,
      );
      add(jpeg);
      add("\nendstream");
    } else add(body);
    add("\nendobj\n");
  });
  const xref = size;
  add(`xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`);
  add(offsets.map((n) => `${String(n).padStart(10, "0")} 00000 n \n`).join(""));
  add(`trailer\n<< /Size ${objects.length + 1} /Root 1 0 R /Info 6 0 R >>\nstartxref\n${xref}\n%%EOF\n`);
  return new Blob(chunks, { type: "application/pdf" });
}

// A print page holding just the sign image at full A4 size.
export function signPrintHtml(src, title) {
  return `<!doctype html><html lang="en-AU"><head><meta charset="utf-8"><title>${escapeHtml(title)}</title>
<style>@page { size: A4 portrait; margin: 0; } html, body { margin: 0; padding: 0; background: #fff; } img { display: block; width: 210mm; height: 297mm; }</style>
</head><body><img src="${escapeHtml(src)}" alt=""></body></html>`;
}
