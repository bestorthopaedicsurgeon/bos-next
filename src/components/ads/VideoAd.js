"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import AdFrame from "@/components/ads/AdFrame";

export default function VideoAd({
  creative,
  className,
  onVideoStart,
  onVideoComplete,
}) {
  const videoRef = useRef(null);
  const startedRef = useRef(false);
  const completedRef = useRef(false);
  const inViewRef = useRef(false);
  const manuallyPausedRef = useRef(false);
  const [paused, setPaused] = useState(true);
  const [muted, setMuted] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  // Playback is driven only by visibility: the video plays, muted, while at
  // least 45% of it is on screen and pauses when it leaves. There is no
  // autoPlay attribute, so it never starts (or counts a start) off screen.
  // Controls stay hidden until the video has played, so a normal autoplay never
  // shows a play icon. They appear up front only when playback cannot start on
  // its own (reduced motion, or the browser blocked autoplay).
  const [hasPlayed, setHasPlayed] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(motionQuery.matches);
    updateMotion();
    motionQuery.addEventListener?.("change", updateMotion);

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current =
          entry.isIntersecting && entry.intersectionRatio >= 0.45;
        if (!inViewRef.current) {
          video.pause();
          return;
        }

        if (!motionQuery.matches && !manuallyPausedRef.current) {
          video.play().catch((error) => {
            // An AbortError only means a pause interrupted this play call.
            if (error?.name === "NotAllowedError") setAutoplayBlocked(true);
          });
        }
      },
      { threshold: [0, 0.45, 1] },
    );
    observer.observe(video);

    return () => {
      observer.disconnect();
      motionQuery.removeEventListener?.("change", updateMotion);
    };
  }, []);

  const handlePlaying = () => {
    setPaused(false);
    setHasPlayed(true);
    setAutoplayBlocked(false);
    if (!startedRef.current) {
      startedRef.current = true;
      onVideoStart?.();
    }
  };

  // While the video is in autoplay it resumes by itself whenever it is back on
  // screen, so the button keeps offering Pause even during a brief off screen
  // pause. A play icon only appears once the visitor has paused it, or when it
  // cannot play by itself.
  const autoplaying = !reducedMotion && !autoplayBlocked && !userPaused;
  const showPause = !paused || (autoplaying && hasPlayed);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (showPause) {
      manuallyPausedRef.current = true;
      setUserPaused(true);
      video.pause();
    } else {
      manuallyPausedRef.current = false;
      setUserPaused(false);
      video.play().catch(() => setPaused(true));
    }
  };

  const toggleMuted = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (video.paused && inViewRef.current) {
      manuallyPausedRef.current = false;
      setUserPaused(false);
      video.play().catch(() => setPaused(true));
    }
  };

  return (
    <AdFrame creative={creative} className={className}>
      <div className="relative aspect-video max-h-[420px] w-full overflow-hidden bg-neutral-950">
        <video
          ref={videoRef}
          src={creative.videoUrl}
          poster={creative.posterUrl}
          className="h-full w-full object-cover"
          muted
          loop={creative.loopVideo}
          playsInline
          preload="metadata"
          controls={false}
          disablePictureInPicture
          onPlaying={handlePlaying}
          onPause={() => setPaused(true)}
          onEnded={() => {
            if (!completedRef.current) {
              completedRef.current = true;
              onVideoComplete?.();
            }
          }}
        >
          {creative.captionsUrl && (
            <track
              kind="captions"
              src={creative.captionsUrl}
              srcLang="en"
              label="English"
              default
            />
          )}
        </video>

        <a
          href={creative.clickUrl}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="absolute inset-0 z-10 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none focus-visible:ring-inset"
          aria-label={`View advertisement from ${creative.advertiserName} (opens in a new tab)`}
        >
          <span className="sr-only">Visit {creative.advertiserName}</span>
        </a>

        {(hasPlayed || reducedMotion || autoplayBlocked) && (
          <div className="absolute right-3 bottom-3 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlayback}
              className="text-primary focus-visible:ring-primary grid size-9 place-items-center rounded-full border border-white/70 bg-white/95 shadow-sm transition hover:bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              aria-label={
                showPause
                  ? "Pause advertisement video"
                  : "Play advertisement video"
              }
            >
              {showPause ? (
                <Pause aria-hidden="true" className="size-4" />
              ) : (
                <Play aria-hidden="true" className="size-4" />
              )}
            </button>
            <button
              type="button"
              onClick={toggleMuted}
              className="text-primary focus-visible:ring-primary grid size-9 place-items-center rounded-full border border-white/70 bg-white/95 shadow-sm transition hover:bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              aria-label={
                muted
                  ? "Unmute advertisement video"
                  : "Mute advertisement video"
              }
            >
              {muted ? (
                <VolumeX aria-hidden="true" className="size-4" />
              ) : (
                <Volume2 aria-hidden="true" className="size-4" />
              )}
            </button>
          </div>
        )}
      </div>
    </AdFrame>
  );
}
