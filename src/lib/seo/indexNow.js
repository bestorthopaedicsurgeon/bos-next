// IndexNow: tells Bing (and Yandex, Naver, Seznam) that a URL changed, so it
// is recrawled in minutes instead of waiting for the next natural crawl.
// This matters beyond Bing itself because ChatGPT search and Copilot answer
// from Bing's web index.
//
// Setup: INDEXNOW_KEY must match the static key file in public/, which is
// served at /<key>.txt and proves ownership of the domain. Submit the same
// key in Bing Webmaster Tools > IndexNow. If INDEXNOW_KEY is unset the
// pings are silently skipped, so local and preview builds stay quiet.

import { after } from "next/server";

const ENDPOINT = "https://api.indexnow.org/indexnow";

function siteHost() {
  const base =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://www.bestorthopaedicsurgeon.com.au";
  return base.replace(/\/$/, "");
}

async function send(payload) {
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });
    // 200 accepted, 202 accepted with key validation pending.
    if (!res.ok && res.status !== 202) {
      console.error("IndexNow ping rejected:", res.status);
    }
  } catch (e) {
    // The cause carries the useful detail (DNS, TLS, timeout).
    console.error(
      "IndexNow ping failed:",
      [e?.message, e?.cause?.message].filter(Boolean).join(" - ")
    );
  }
}

// Never lets a search engine ping delay or fail a user action: the request is
// handed to Next's after() so it runs once the response has been sent, but
// still inside the serverless function's lifetime (a bare floating promise can
// be killed when the function freezes).
export function pingIndexNow(paths) {
  const key = process.env.INDEXNOW_KEY;
  if (!key) return;

  const base = siteHost();
  // Only real URLs, never Next.js route patterns like /doctor/[slug].
  const urlList = (Array.isArray(paths) ? paths : [paths])
    .filter((p) => typeof p === "string" && p.startsWith("/") && !p.includes("["))
    .map((p) => `${base}${p}`);
  if (urlList.length === 0) return;

  const payload = {
    host: base.replace(/^https?:\/\//, ""),
    key,
    keyLocation: `${base}/${key}.txt`,
    urlList,
  };

  try {
    after(() => send(payload));
  } catch {
    // after() throws outside a request scope (e.g. a script or test run);
    // fall back to sending inline so the ping is not silently dropped.
    void send(payload);
  }
}
