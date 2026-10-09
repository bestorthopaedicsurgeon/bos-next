import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

import { googleReviews } from "../src/data/googleReviews.js";

const distDir = process.env.TEST_DIST_DIR || ".next";
const expectedBaseUrl = "https://www.bestorthopaedicsurgeon.com.au";
let checkedReviews = 0;

for (const [slug, data] of Object.entries(googleReviews)) {
  const htmlPath = path.join(
    distDir,
    "server",
    "app",
    "doctor",
    `${slug}.html`,
  );
  assert.ok(fs.existsSync(htmlPath), `missing generated profile HTML: ${slug}`);

  const html = fs.readFileSync(htmlPath, "utf8");
  const primary = data.listings.find((listing) => listing.primary);
  const renderedCards = html.match(/data-review-source="google"/g) || [];
  const renderedDates = html.match(/<time dateTime="\d{4}-\d{2}-\d{2}"/g) || [];
  const renderedCitations = html.match(/<blockquote cite="https:\/\//g) || [];
  const structuredData = [
    ...html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    ),
  ].map((match) => JSON.parse(match[1]));
  const physician = structuredData.find((item) => item["@type"] === "Physician");

  assert.equal(
    renderedCards.length,
    data.reviews.length,
    `${slug} does not contain every review card in its initial HTML`,
  );
  assert.equal(
    renderedDates.length,
    data.reviews.length,
    `${slug} does not contain every machine-readable review date`,
  );
  assert.equal(
    renderedCitations.length,
    data.reviews.length,
    `${slug} does not contain every review source citation`,
  );
  assert.ok(
    html.includes(
      `<link rel="canonical" href="${expectedBaseUrl}/doctor/${slug}"/>`,
    ),
    `${slug} does not use the production canonical profile URL`,
  );
  assert.equal(
    physician?.["@id"],
    `${expectedBaseUrl}/doctor/${slug}#physician`,
    `${slug} has the wrong physician entity ID`,
  );
  assert.equal(
    physician?.url,
    `${expectedBaseUrl}/doctor/${slug}`,
    `${slug} has the wrong physician entity URL`,
  );
  assert.match(
    html,
    /<meta name="robots" content="index, follow"\/>/,
    `${slug} is not explicitly indexable`,
  );
  assert.ok(!html.includes("data-nosnippet"), `${slug} blocks review snippets`);
  assert.ok(
    primary?.url && physician?.sameAs?.includes(primary.url),
    `${slug} does not link its physician entity to the primary Google listing`,
  );

  for (const review of data.reviews) {
    assert.ok(
      html.includes(`google-review-${review.id}-author`),
      `${slug} is missing ${review.id} from its initial HTML`,
    );
    checkedReviews += 1;
  }
}

console.log(
  `Verified ${checkedReviews} server-rendered Google reviews across ${Object.keys(googleReviews).length} profiles.`,
);
