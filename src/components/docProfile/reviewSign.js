// The printable A4 counter sign that asks patients to review a surgeon on
// BOS. Plain HTML, so the same markup is printed from a hidden frame and
// shown as the preview in the QR dialog.

const TEAL = "#2f797b";
const TEAL_LIGHT = "#e9f2f2";
const INK = "#292a39";
const MUTED = "#5f6470";
const GOLD = "#F3CD03";
const STAR =
  "M14.9356 5.44571C14.8894 5.30974 14.8045 5.19027 14.6912 5.10204C14.5779 5.01381 14.4413 4.96069 14.2981 4.94924L10.1111 4.61654L8.29929 0.605809C8.24159 0.476631 8.14773 0.366914 8.02905 0.289898C7.91037 0.212883 7.77194 0.171861 7.63046 0.171784C7.48898 0.171706 7.3505 0.212576 7.23174 0.289461C7.11297 0.366346 7.019 0.47596 6.96115 0.605074L5.14931 4.61654L0.962319 4.94924C0.821643 4.96038 0.687156 5.01182 0.574947 5.09739C0.462738 5.18297 0.37756 5.29906 0.329602 5.43178C0.281643 5.5645 0.272936 5.70822 0.304522 5.84576C0.336108 5.9833 0.406649 6.10882 0.507706 6.20732L3.60187 9.22363L2.50756 13.9622C2.47434 14.1056 2.48498 14.2557 2.53813 14.393C2.59127 14.5303 2.68446 14.6485 2.8056 14.7322C2.92673 14.8159 3.07022 14.8612 3.21745 14.8623C3.36468 14.8635 3.50885 14.8203 3.63124 14.7385L7.63022 12.0725L11.6292 14.7385C11.7543 14.8215 11.9018 14.8643 12.052 14.861C12.2021 14.8577 12.3476 14.8085 12.4689 14.7201C12.5903 14.6316 12.6816 14.5081 12.7307 14.3662C12.7797 14.2242 12.7841 14.0707 12.7433 13.9262L11.4001 9.22583L14.7314 6.22788C14.9496 6.03105 15.0296 5.72406 14.9356 5.44571Z";

const escapeHtml = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// Long names step down so they stay on one or two lines.
const nameSize = (name) => (name.length <= 18 ? 34 : name.length <= 24 ? 29 : 25);

export function reviewSignHtml({ name, specialty, qrSvg, logoSrc }) {
  const star = `<svg viewBox="0 0 15 15" aria-hidden="true"><path d="${STAR}" fill="${GOLD}"/></svg>`;
  return `<!doctype html>
<html lang="en-AU"><head><meta charset="utf-8">
<title>Review ${escapeHtml(name)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@600;700&display=swap" rel="stylesheet">
<style>
  @page { size: A4 portrait; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 210mm; height: 297mm; overflow: hidden; background: #fff; }
  body { font-family: 'DM Sans', Arial, sans-serif; color: ${INK}; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .page { width: 210mm; height: 297mm; padding: 10mm; display: flex; }
  .card { flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; border: 0.7mm solid ${TEAL}; border-radius: 7mm; overflow: hidden; padding: 15mm 14mm 0; }
  .logo { width: 64mm; height: auto; display: block; }
  .eyebrow { margin-top: 10mm; display: flex; align-items: center; gap: 4mm; color: ${TEAL}; font-size: 10pt; font-weight: 700; letter-spacing: 0.35em; text-transform: uppercase; }
  .eyebrow::before, .eyebrow::after { content: ""; width: 12mm; height: 0.4mm; background: ${TEAL}; opacity: 0.45; }
  h1 { margin-top: 6mm; font-family: 'Syne', Arial, sans-serif; font-weight: 600; font-size: 21pt; line-height: 1.2; color: ${INK}; }
  .name { margin-top: 1.5mm; font-family: 'Syne', Arial, sans-serif; font-weight: 700; line-height: 1.12; color: ${TEAL}; max-width: 168mm; }
  .role { margin-top: 2.5mm; font-size: 12.5pt; font-weight: 500; color: ${MUTED}; }
  .stars { margin-top: 7mm; display: flex; gap: 2.5mm; }
  .stars svg { width: 8mm; height: 8mm; display: block; }
  .qr-wrap { position: relative; margin-top: 8mm; padding: 6mm; border-radius: 5mm; background: #fff; }
  .qr-wrap .c { position: absolute; width: 15mm; height: 15mm; border: 1.6mm solid ${TEAL}; }
  .c.tl { top: 0; left: 0; border-right: 0; border-bottom: 0; border-top-left-radius: 5mm; }
  .c.tr { top: 0; right: 0; border-left: 0; border-bottom: 0; border-top-right-radius: 5mm; }
  .c.bl { bottom: 0; left: 0; border-right: 0; border-top: 0; border-bottom-left-radius: 5mm; }
  .c.br { bottom: 0; right: 0; border-left: 0; border-top: 0; border-bottom-right-radius: 5mm; }
  .qr { width: 98mm; height: 98mm; }
  .qr svg { width: 100%; height: 100%; display: block; }
  .steps { margin-top: 8mm; display: flex; gap: 4mm; list-style: none; }
  .steps li { display: flex; align-items: center; gap: 2.5mm; padding: 2.2mm 4.5mm 2.2mm 2.2mm; border-radius: 99px; background: ${TEAL_LIGHT}; font-size: 11pt; font-weight: 600; color: ${INK}; white-space: nowrap; }
  .steps b { width: 6.5mm; height: 6.5mm; border-radius: 50%; background: ${TEAL}; color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 9.5pt; }
  .band { margin: auto -14mm 0; width: calc(100% + 28mm); padding: 7mm 18mm; background: ${TEAL}; color: #fff; font-size: 13pt; font-weight: 500; line-height: 1.4; }
</style></head>
<body><div class="page"><div class="card">
  <img class="logo" src="${escapeHtml(logoSrc)}" alt="Best Orthopaedic Surgeon">
  <p class="eyebrow">Patient feedback</p>
  <h1>How was your appointment with</h1>
  <p class="name" style="font-size:${nameSize(name)}pt">${escapeHtml(name)}?</p>
  ${specialty ? `<p class="role">${escapeHtml(specialty)}</p>` : ""}
  <div class="stars">${star.repeat(5)}</div>
  <div class="qr-wrap"><span class="c tl"></span><span class="c tr"></span><span class="c bl"></span><span class="c br"></span><div class="qr">${qrSvg}</div></div>
  <ol class="steps"><li><b>1</b>Open your phone camera</li><li><b>2</b>Scan the code</li><li><b>3</b>Leave your review</li></ol>
  <p class="band">Your review helps other patients choose their surgeon with confidence. Thank you!</p>
</div></div></body></html>`;
}
