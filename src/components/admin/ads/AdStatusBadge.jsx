import { cn } from "@/lib/utils";

const STATUS_STYLES = {
  ACTIVE: "border-emerald-200 bg-emerald-50 text-emerald-700",
  SCHEDULED: "border-sky-200 bg-sky-50 text-sky-700",
  DRAFT: "border-neutral-200 bg-neutral-50 text-neutral-600",
  PENDING_REVIEW: "border-amber-200 bg-amber-50 text-amber-700",
  PAUSED: "border-orange-200 bg-orange-50 text-orange-700",
  ENDED: "border-neutral-300 bg-neutral-100 text-neutral-600",
  REJECTED: "border-red-200 bg-red-50 text-red-700",
  ARCHIVED: "border-neutral-300 bg-neutral-100 text-neutral-500",
};

export default function AdStatusBadge({ status }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-1 font-dm-sans text-xs font-semibold",
        STATUS_STYLES[status] || STATUS_STYLES.DRAFT,
      )}
    >
      {String(status || "DRAFT").replaceAll("_", " ").toLowerCase().replace(/^./, (letter) => letter.toUpperCase())}
    </span>
  );
}
