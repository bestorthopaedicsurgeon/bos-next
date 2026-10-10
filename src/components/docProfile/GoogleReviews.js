import { ExternalLink } from "lucide-react";
import { googleReviews } from "@/data/googleReviews";
import { GoogleG, Stars } from "./googleReviewParts";
import GoogleReviewsList from "./GoogleReviewsList";

// The "Google" wordmark in Google's letter colours.
const WORDMARK = [
  ["G", "#4285F4"],
  ["o", "#EA4335"],
  ["o", "#FBBC05"],
  ["g", "#4285F4"],
  ["l", "#34A853"],
  ["e", "#EA4335"],
];

const plural = (n, unit) => (n === 1 ? `a ${unit} ago` : `${n} ${unit}s ago`);

// A review's age worded the way Google words it ("3 months ago"). Worked
// out on the server when the page is built, so the HTML crawlers read and
// what visitors see always match.
export function reviewAge(isoDate, now = new Date()) {
  const then = new Date(`${isoDate}T00:00:00Z`);
  const days = Math.floor((now - then) / 86400000);
  if (days < 1) return "today";
  if (days < 7) return plural(days, "day");
  if (days < 30) return plural(Math.floor(days / 7), "week");
  let months = (now.getUTCFullYear() - then.getUTCFullYear()) * 12 + (now.getUTCMonth() - then.getUTCMonth());
  if (now.getUTCDate() < then.getUTCDate()) months -= 1;
  if (months < 1) return "a month ago";
  if (months < 12) return plural(months, "month");
  return plural(Math.floor(months / 12), "year");
}

export function getGoogleReviews(slug) {
  const data = googleReviews[slug];
  return data?.reviews?.length ? data : null;
}

// Google reviews for a surgeon, shown under the BOS reviews. Rendered on the
// server so every review is in the page HTML; only the "show more" controls
// run in the browser.
export default function GoogleReviews({ slug, doctorName, data: suppliedData }) {
  const data = suppliedData ?? getGoogleReviews(slug);
  if (!data) return null;

  const primary = data.listings.find((l) => l.primary) || data.listings[0];
  const others = data.listings.filter((l) => l !== primary);
  const byKey = Object.fromEntries(data.listings.map((l) => [l.key, l]));
  const items = data.reviews.map((r) => ({
    id: r.id,
    author: r.author,
    rating: r.rating,
    date: r.date,
    age: reviewAge(r.date),
    text: r.text,
    sourceUrl: byKey[r.listing].url,
    source:
      r.listing === primary.key
        ? null
        : { name: byKey[r.listing].name, url: byKey[r.listing].url },
  }));

  return (
    <section aria-labelledby="google-reviews-heading" className="w-full">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 id="google-reviews-heading" className="as-h3 flex items-center gap-2">
            <span className="tracking-tight">
              {WORDMARK.map(([letter, color], i) => (
                <span key={i} style={{ color }}>
                  {letter}
                </span>
              ))}
            </span>{" "}
            <span className="text-primary">Reviews</span>
          </h2>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-[14px] text-[#737373]">
            <span className="text-[16px] font-[700] text-[#232323]">{primary.rating.toFixed(1)}</span>
            <Stars rating={primary.rating} />
            <span>
              {primary.shared
                ? `${primary.reviewCount} reviews for ${primary.name} on Google`
                : `${primary.reviewCount} reviews on Google`}
            </span>
          </div>
        </div>
        <a
          href={primary.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${primary.shared ? primary.name : doctorName} on Google (opens in a new tab)`}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary bg-white px-6 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/10"
        >
          <GoogleG className="h-4 w-4" />
          View on Google
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
      <p className="mt-3 text-[13px] text-[#737373]">
        {primary.shared
          ? `Reviews that name ${doctorName} on the ${primary.name} Google listing, shown as written by each reviewer.`
          : `What patients say about ${doctorName} on Google, shown as written by each reviewer.`}
        {others.map((l) => (
          <span key={l.key}>
            {" "}Includes reviews that name {doctorName} from the{" "}
            <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-primary text-[13px] underline underline-offset-2">
              {l.name}
            </a>{" "}
            Google listing ({l.rating.toFixed(1)}, {l.reviewCount} reviews).
          </span>
        ))}
      </p>

      <GoogleReviewsList items={items} />
    </section>
  );
}
