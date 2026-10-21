import assert from "node:assert/strict";
import test from "node:test";

import { MIN_TEXT_AFTER_AD, splitForInlineAd } from "./articleSplit.js";

const words = (n) => Array.from({ length: n }, (_, i) => `word${i}`).join(" ");
const section = (title, text = words(40)) => `<h2>${title}</h2>\r\n<p>${text}</p>\r\n`;
const body = `<p>Intro ${words(30)}</p>\r\n${section("One")}${section("Two")}${section("Three", words(150))}${section("Four")}`;

test("splits before the third section of a post with top level headings", () => {
  const [before, after] = splitForInlineAd(body);
  assert.ok(before.endsWith(`${words(40)}</p>\r\n`));
  assert.ok(after.startsWith("<h2>Three</h2>"));
  assert.equal(before + after, body);
});

test("splits inside a single <article> wrapper and keeps both halves valid", () => {
  const html = `<article>\r\n${body}</article>`;
  const [before, after] = splitForInlineAd(html);
  assert.ok(before.startsWith("<article>\r\n<p>Intro"));
  assert.ok(before.endsWith("</p>\r\n</article>"));
  assert.ok(after.startsWith("<article><h2>Three</h2>"));
  assert.ok(after.endsWith("</article>"));
  assert.equal(before.match(/<article>/g).length, before.match(/<\/article>/g).length);
  assert.equal(after.match(/<article>/g).length, after.match(/<\/article>/g).length);
});

test("reopens nested wrappers with their original attributes", () => {
  const html = `\n<div class="post" data-x="a>b">\n  <article>${body}</article>\n</div>\n`;
  const [before, after] = splitForInlineAd(html);
  assert.ok(before.endsWith("</article></div>"));
  assert.ok(after.startsWith('<div class="post" data-x="a>b"><article><h2>Three</h2>'));
});

test("leaves short or heading free posts alone", () => {
  assert.equal(splitForInlineAd(`<article>${section("One")}${section("Two")}</article>`), null);
  assert.equal(splitForInlineAd(`<p class="p1"><b>Heading</b></p><p>${words(400)}</p>`), null);
  assert.equal(splitForInlineAd(`${section("One")}${section("Two")}${section("Three", "short")}`), null);
  assert.equal(splitForInlineAd(""), null);
});

test("does not descend when the wrapper sits beside other content", () => {
  assert.equal(splitForInlineAd(`<p>Lead ${words(20)}</p><article>${body}</article>`), null);
});

test("measures the text after the split, not the markup", () => {
  const padding = `<span style="${"x".repeat(MIN_TEXT_AFTER_AD)}"></span>`;
  const html = `${section("One")}${section("Two")}<h2>Three</h2>${padding}<p>short</p>`;
  assert.equal(splitForInlineAd(html), null);
});
