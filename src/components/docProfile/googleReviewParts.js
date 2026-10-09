// Small presentational pieces shared by the server rendered Google reviews
// section and its client list. No hooks, so both sides can use them.

const STAR =
  "M9 1L11.5 6L17 6.75L13 10.75L14 16L9 13.5L4 16L5 10.75L1 6.75L6.5 6L9 1Z";

function StarIcons({ color, size }) {
  return [1, 2, 3, 4, 5].map((i) => (
    <svg key={i} width={size} height={size} viewBox="0 0 18 18" aria-hidden="true" className="shrink-0">
      <path d={STAR} fill={color} stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ));
}

// Same star as the BOS review card. A filled row is laid over an empty row
// and clipped to the rating, so 4.6 shows as four and a bit stars.
export function Stars({ rating, size = 16, className = "" }) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  return (
    <span
      role="img"
      aria-label={`Rated ${rating} out of 5`}
      className={`relative inline-flex ${className}`}
    >
      <span className="flex gap-0.5">
        <StarIcons color="#E2E8F0" size={size} />
      </span>
      <span className="absolute inset-y-0 left-0 flex gap-0.5 overflow-hidden" style={{ width: `${pct}%` }}>
        <StarIcons color="#F3CD03" size={size} />
      </span>
    </span>
  );
}

// Google's "G" mark in its brand colours.
export function GoogleG({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}
