import assert from "node:assert/strict";
import test from "node:test";

import {
  GOOGLE_REVIEWS_CAPTURED_AT,
  googleReviews,
} from "./googleReviews.js";

test("every Google review has complete, attributable source data", () => {
  const reviewIds = new Set();

  for (const [slug, data] of Object.entries(googleReviews)) {
    assert.ok(data.listings.length > 0, `${slug} has no Google listing`);
    assert.equal(
      data.listings.filter((listing) => listing.primary).length,
      1,
      `${slug} must have exactly one primary Google listing`,
    );

    const listingKeys = new Set();
    for (const listing of data.listings) {
      assert.ok(listing.key, `${slug} has a listing without a key`);
      assert.ok(!listingKeys.has(listing.key), `${slug} repeats ${listing.key}`);
      assert.match(listing.url, /^https:\/\//, `${listing.key} has an invalid URL`);
      assert.ok(
        Number.isFinite(listing.rating) && listing.rating >= 1 && listing.rating <= 5,
        `${listing.key} has an invalid rating`,
      );
      assert.ok(
        Number.isInteger(listing.reviewCount) && listing.reviewCount > 0,
        `${listing.key} has an invalid review count`,
      );
      listingKeys.add(listing.key);
    }

    assert.ok(data.reviews.length > 0, `${slug} has no reviews`);
    for (const review of data.reviews) {
      assert.ok(review.id, `${slug} has a review without an ID`);
      assert.ok(!reviewIds.has(review.id), `duplicate review ID: ${review.id}`);
      assert.ok(review.author.trim(), `${review.id} has no author`);
      assert.ok(review.text.trim(), `${review.id} has no review text`);
      assert.ok(listingKeys.has(review.listing), `${review.id} has no source listing`);
      assert.ok(
        Number.isFinite(review.rating) && review.rating >= 1 && review.rating <= 5,
        `${review.id} has an invalid rating`,
      );
      assert.match(review.date, /^\d{4}-\d{2}-\d{2}$/, `${review.id} has an invalid date`);
      assert.ok(
        review.date <= GOOGLE_REVIEWS_CAPTURED_AT,
        `${review.id} is dated after the capture date`,
      );
      reviewIds.add(review.id);
    }
  }

  assert.equal(reviewIds.size, 197);
});
