"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Maximize2,
  Minimize2,
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
} from "lucide-react";

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
};

export const TutorialVideo = ({ src, title = "Video guide" }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const hideControlsTimer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const clearHideControlsTimer = useCallback(() => {
    if (hideControlsTimer.current) {
      window.clearTimeout(hideControlsTimer.current);
      hideControlsTimer.current = null;
    }
  }, []);

  const scheduleControlsHide = useCallback(() => {
    clearHideControlsTimer();
    if (!isPlaying) return;

    hideControlsTimer.current = window.setTimeout(() => {
      setControlsVisible(false);
    }, 2400);
  }, [clearHideControlsTimer, isPlaying]);

  const showControls = useCallback(() => {
    setControlsVisible(true);
    scheduleControlsHide();
  }, [scheduleControlsHide]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === playerRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      clearHideControlsTimer();
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [clearHideControlsTimer]);

  useEffect(() => {
    if (isPlaying) {
      scheduleControlsHide();
    } else {
      clearHideControlsTimer();
      setControlsVisible(true);
    }
  }, [clearHideControlsTimer, isPlaying, scheduleControlsHide]);

  const handlePlayPause = async () => {
    const video = videoRef.current;
    if (!video || hasError) return;

    if (!video.paused) {
      video.pause();
      return;
    }

    if (hasEnded || video.ended) {
      video.currentTime = 0;
      setCurrentTime(0);
      setHasEnded(false);
    }

    try {
      await video.play();
    } catch {
      setIsPlaying(false);
    }
  };

  const handleSeek = (event) => {
    const video = videoRef.current;
    const nextTime = Number(event.target.value);
    if (!video || !Number.isFinite(nextTime)) return;

    video.currentTime = nextTime;
    setCurrentTime(nextTime);
    setHasEnded(false);
  };

  const handleVolumeChange = (event) => {
    const video = videoRef.current;
    const nextVolume = Number(event.target.value);
    if (!video || !Number.isFinite(nextVolume)) return;

    video.volume = nextVolume;
    video.muted = nextVolume === 0;
    setVolume(nextVolume);
    setIsMuted(nextVolume === 0);
  };

  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMutedState = !video.muted;
    video.muted = nextMutedState;
    setIsMuted(nextMutedState);
  };

  const handleFullscreenToggle = async () => {
    const player = playerRef.current;
    const video = videoRef.current;
    if (!player || !video) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        return;
      }

      if (player.requestFullscreen) {
        await player.requestFullscreen();
      } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
      }
    } catch {
      setIsFullscreen(false);
    }
  };

  const handleKeyDown = (event) => {
    if (
      event.target instanceof HTMLButtonElement ||
      event.target instanceof HTMLInputElement
    ) {
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    if (event.key === " " || event.key.toLowerCase() === "k") {
      event.preventDefault();
      handlePlayPause();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      video.currentTime = Math.min(video.duration || 0, video.currentTime + 5);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      video.currentTime = Math.max(0, video.currentTime - 5);
    } else if (event.key.toLowerCase() === "m") {
      event.preventDefault();
      handleMuteToggle();
    } else if (event.key.toLowerCase() === "f") {
      event.preventDefault();
      handleFullscreenToggle();
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const displayedVolume = isMuted ? 0 : volume;

  return (
    <section className="tutorial-video-wrapper" aria-label={title}>
      <header className="tutorial-video-heading">
        <span className="tutorial-video-eyebrow">Video guide</span>
        <h3>{title}</h3>
      </header>

      <div
        ref={playerRef}
        className="tutorial-video-frame"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseMove={showControls}
        onMouseLeave={() => isPlaying && setControlsVisible(false)}
        onFocusCapture={showControls}
        onTouchStart={showControls}
      >
        <video
          ref={videoRef}
          className="tutorial-video-element"
          preload="metadata"
          playsInline
          onClick={handlePlayPause}
          onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
          onDurationChange={(event) => setDuration(event.currentTarget.duration)}
          onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
          onPlay={(event) => {
            setDuration(event.currentTarget.duration || 0);
            setIsPlaying(true);
            setHasStarted(true);
            setHasEnded(false);
            setHasError(false);
          }}
          onPause={() => setIsPlaying(false)}
          onEnded={() => {
            setIsPlaying(false);
            setHasEnded(true);
            setControlsVisible(true);
          }}
          onWaiting={() => setIsBuffering(true)}
          onCanPlay={(event) => {
            setDuration(event.currentTarget.duration || 0);
            setIsBuffering(false);
          }}
          onPlaying={() => setIsBuffering(false)}
          onError={() => {
            setHasError(true);
            setIsBuffering(false);
            setIsPlaying(false);
          }}
        >
          <source src={src} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {!hasError && (!isPlaying || isBuffering) && (
          <div className="tutorial-video-center-control">
            <button
              type="button"
              className="tutorial-video-primary-control"
              aria-label={hasEnded ? "Replay video" : "Play video"}
              title={hasEnded ? "Replay" : "Play"}
              onClick={handlePlayPause}
            >
              {isBuffering && hasStarted ? (
                <span className="tutorial-video-spinner" aria-label="Loading video" />
              ) : hasEnded ? (
                <RotateCcw aria-hidden="true" />
              ) : (
                <Play className="tutorial-video-play-icon" aria-hidden="true" />
              )}
            </button>
          </div>
        )}

        {hasError && (
          <div className="tutorial-video-error" role="alert">
            Video unavailable. Please refresh and try again.
          </div>
        )}

        {!hasError && (
          <div
            className={`tutorial-video-controls ${
              controlsVisible || !isPlaying
                ? "tutorial-video-controls--visible"
                : ""
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <input
              className="tutorial-video-progress"
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={Math.min(currentTime, duration || 0)}
              onChange={handleSeek}
              aria-label="Video progress"
              style={{ "--video-progress": `${progress}%` }}
            />

            <div className="tutorial-video-control-row">
              <button
                type="button"
                className="tutorial-video-icon-control"
                aria-label={isPlaying ? "Pause video" : "Play video"}
                title={isPlaying ? "Pause" : "Play"}
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <Pause aria-hidden="true" />
                ) : hasEnded ? (
                  <RotateCcw aria-hidden="true" />
                ) : (
                  <Play className="tutorial-video-play-icon" aria-hidden="true" />
                )}
              </button>

              <span className="tutorial-video-time" aria-label="Video time">
                {formatTime(currentTime)}
                <span aria-hidden="true"> / </span>
                {formatTime(duration)}
              </span>

              <div className="tutorial-video-spacer" />

              <div className="tutorial-video-volume-group">
                <button
                  type="button"
                  className="tutorial-video-icon-control"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  title={isMuted ? "Unmute" : "Mute"}
                  onClick={handleMuteToggle}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX aria-hidden="true" />
                  ) : (
                    <Volume2 aria-hidden="true" />
                  )}
                </button>
                <input
                  className="tutorial-video-volume"
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={displayedVolume}
                  onChange={handleVolumeChange}
                  aria-label="Video volume"
                  style={{ "--video-volume": `${displayedVolume * 100}%` }}
                />
              </div>

              <button
                type="button"
                className="tutorial-video-icon-control"
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                onClick={handleFullscreenToggle}
              >
                {isFullscreen ? (
                  <Minimize2 aria-hidden="true" />
                ) : (
                  <Maximize2 aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
