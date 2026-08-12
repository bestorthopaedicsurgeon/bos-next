"use client";

import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export const TutorialVideo = ({ src, title = "Watch Tutorial" }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setHasStarted(false);
  };

  return (
    <div className="tutorial-video-wrapper">
      {/* Label */}
      <div className="tutorial-video-label">
        <div className="tutorial-video-label-dot" />
        <span>{title}</span>
      </div>

      {/* Video Frame */}
      <div className="tutorial-video-frame" onClick={handlePlayPause}>
        <video
          ref={videoRef}
          className="tutorial-video-element"
          preload="metadata"
          playsInline
          controls={isPlaying}
          onEnded={handleVideoEnd}
          onPause={() => setIsPlaying(false)}
          onPlay={() => { setIsPlaying(true); setHasStarted(true); }}
        >
          <source src={src} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Overlay */}
        <div
          className={`tutorial-video-overlay ${isPlaying ? "tutorial-video-overlay--hidden" : ""}`}
        >
          <button
            className="tutorial-video-play-btn"
            aria-label="Play video"
            onClick={(e) => {
              e.stopPropagation();
              handlePlayPause();
            }}
          >
            {hasStarted ? (
              <Play className="tutorial-video-play-icon" />
            ) : (
              <Play className="tutorial-video-play-icon" />
            )}
          </button>
          {!hasStarted && (
            <p className="tutorial-video-cta-text">Click to play</p>
          )}
        </div>
      </div>
    </div>
  );
};
