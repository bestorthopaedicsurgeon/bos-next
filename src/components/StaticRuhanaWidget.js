"use client";

import Image from "next/image";
import { Mic, MicOff, PhoneOff, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import "./StaticRuhanaWidget.css";

const ANAM_AGENT_ID = "9734bd3e-1f0e-4556-a325-1772e7fd1eda";
const ANAM_API_BASE_URL = "https://lab.anam.ai";
const VIDEO_ELEMENT_ID = "rhn-live-video";
const CONNECT_TIMEOUT_MS = 45000;

const loadAnamSdk = () => import("@anam-ai/js-sdk");

// Anam signs the idle clip URL for one hour, so it is fetched at runtime.
const fetchPreviewVideoUrl = async () => {
  const response = await fetch(
    `${ANAM_API_BASE_URL}/v1/personas/${ANAM_AGENT_ID}/widget`,
  );
  if (!response.ok) return null;
  const config = await response.json();
  return config.persona?.avatarVideoUrl || null;
};

export default function StaticRuhanaWidget({
  agentName,
  imageUrl,
  position = "right",
}) {
  const [open, setOpen] = useState(false);
  // idle | connecting | live
  const [callState, setCallState] = useState("idle");
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [callError, setCallError] = useState("");
  const clientRef = useRef(null);
  const attemptRef = useRef(0);
  const timeoutRef = useRef(null);
  const videoRef = useRef(null);
  const previewVideoRef = useRef(null);
  const previewSlotRef = useRef(null);

  // One looping idle clip is shared by the launcher and the open panel. It is
  // created outside React and moved between the two avatar slots, so it keeps
  // playing from the same frame when the widget opens or closes.
  const attachPreview = useCallback((slot) => {
    previewSlotRef.current = slot;
    const video = previewVideoRef.current;
    if (!slot || !video) return;

    slot.appendChild(video);
    video.play().catch(() => {});
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion || navigator.connection?.saveData) return undefined;

    let cancelled = false;
    let refreshing = false;

    const video = document.createElement("video");
    video.className = "rhn-preview-video";
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.setAttribute("aria-hidden", "true");
    video.addEventListener("playing", () => {
      video.classList.add("rhn-video-on");
    });
    // A long visit can outlive the signed URL; swap in a fresh one.
    video.addEventListener("error", async () => {
      if (refreshing || cancelled) return;
      refreshing = true;
      const resumeAt = video.currentTime;
      const url = await fetchPreviewVideoUrl().catch(() => null);
      if (cancelled || !url) return;
      video.src = url;
      video.currentTime = resumeAt;
      video.play().catch(() => {});
      setTimeout(() => {
        refreshing = false;
      }, 60000);
    });

    const start = async () => {
      const url = await fetchPreviewVideoUrl().catch(() => null);
      if (cancelled || !url) return;

      video.src = url;
      previewVideoRef.current = video;
      if (previewSlotRef.current) attachPreview(previewSlotRef.current);
    };

    // Wait for the page to finish loading so the clip never competes with it.
    if (document.readyState === "complete") {
      start();
    } else {
      window.addEventListener("load", start, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", start);
      previewVideoRef.current = null;
      video.removeAttribute("src");
      video.load();
      video.remove();
    };
  }, [attachPreview]);

  // Fetch the SDK as soon as the panel opens so Call now starts faster.
  useEffect(() => {
    if (open) loadAnamSdk().catch(() => {});
  }, [open]);

  const endCall = useCallback((message = "") => {
    attemptRef.current += 1;
    clearTimeout(timeoutRef.current);

    const client = clientRef.current;
    clientRef.current = null;
    client?.stopStreaming().catch(() => {});

    if (videoRef.current) videoRef.current.srcObject = null;

    setCallState("idle");
    setVideoPlaying(false);
    setMuted(false);
    setCallError(message);
  }, []);

  useEffect(
    () => () => {
      clearTimeout(timeoutRef.current);
      clientRef.current?.stopStreaming().catch(() => {});
    },
    [],
  );

  const startCall = async () => {
    if (callState !== "idle") return;

    const attempt = ++attemptRef.current;
    const isCurrent = () => attempt === attemptRef.current;
    let live = false;

    setCallState("connecting");
    setCallError("");

    timeoutRef.current = setTimeout(() => {
      if (isCurrent() && !live) {
        endCall("Taking too long to connect. Please try again.");
      }
    }, CONNECT_TIMEOUT_MS);

    try {
      const [{ createClient, AnamEvent }, response] = await Promise.all([
        loadAnamSdk(),
        fetch(`${ANAM_API_BASE_URL}/v1/auth/widget`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ agentId: ANAM_AGENT_ID }),
        }),
      ]);

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const { sessionToken } = await response.json();
      if (!isCurrent()) return;

      const client = createClient(sessionToken, {
        api: { baseUrl: ANAM_API_BASE_URL },
        metrics: { disableClientMetrics: true },
      });
      clientRef.current = client;

      // stopStreaming does nothing while the session is still starting, so a
      // call closed mid connect is hung up as soon as it comes up.
      const hangUpIfStale = () => {
        if (isCurrent()) return false;
        client.stopStreaming().catch(() => {});
        return true;
      };

      client.addListener(AnamEvent.SESSION_READY, hangUpIfStale);

      client.addListener(AnamEvent.VIDEO_PLAY_STARTED, () => {
        if (hangUpIfStale()) return;
        live = true;
        clearTimeout(timeoutRef.current);
        setVideoPlaying(true);
        setCallState("live");
      });

      client.addListener(AnamEvent.MIC_PERMISSION_DENIED, () => {
        if (isCurrent()) {
          endCall(`Allow microphone access to talk with ${agentName}.`);
        }
      });

      client.addListener(AnamEvent.CONNECTION_CLOSED, () => {
        if (!isCurrent()) return;
        endCall(
          live ? "" : `${agentName} could not connect. Please try again.`,
        );
      });

      await client.streamToVideoElement(VIDEO_ELEMENT_ID);
      hangUpIfStale();
    } catch {
      if (isCurrent()) {
        endCall(`${agentName} is unavailable right now. Please try again.`);
      }
    }
  };

  const toggleMute = () => {
    const client = clientRef.current;
    if (!client) return;

    const state = muted ? client.unmuteInputAudio() : client.muteInputAudio();
    setMuted(state.isMuted);
  };

  const closeWidget = () => {
    endCall();
    setOpen(false);
  };

  const avatar = (round = false) => (
    <span
      className={
        round
          ? `rhn-round-avatar rhn-round-avatar-${callState}`
          : "rhn-avatar"
      }
    >
      <Image
        src={imageUrl}
        alt=""
        fill
        priority
        sizes={round ? "176px" : "84px"}
        style={{
          objectFit: "cover",
          objectPosition: round ? "center 18%" : "center 22%",
          zIndex: 1,
        }}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
      <span className="rhn-preview-slot" ref={attachPreview} />
      {round && (
        <video
          ref={videoRef}
          id={VIDEO_ELEMENT_ID}
          className={`rhn-video ${videoPlaying ? "rhn-video-on" : ""}`}
          autoPlay
          playsInline
        />
      )}
      <i aria-hidden="true" />
    </span>
  );

  const statusText = {
    idle: "Ask naturally. Your patient navigator can help you explore BOS.",
    connecting: `Connecting to ${agentName}. Allow microphone access if asked.`,
    live: `${agentName} is listening. Speak naturally.`,
  }[callState];

  return (
    <aside
      className={`rhn-static-widget rhn-${position}`}
      aria-label={`${agentName} patient navigator`}
    >
      {open ? (
        <section className="rhn-preview-panel">
          <button
            className="rhn-close"
            type="button"
            aria-label={`Close ${agentName}`}
            title="Close"
            onClick={closeWidget}
          >
            <X aria-hidden="true" />
          </button>

          {avatar(true)}

          <strong>Talk with {agentName}</strong>

          <p aria-live="polite">{statusText}</p>

          {callState === "live" ? (
            <div className="rhn-call-controls">
              <button
                className={`rhn-mute ${muted ? "rhn-mute-on" : ""}`}
                type="button"
                aria-label={muted ? "Unmute microphone" : "Mute microphone"}
                aria-pressed={muted}
                title={muted ? "Unmute" : "Mute"}
                onClick={toggleMute}
              >
                {muted ? <MicOff aria-hidden="true" /> : <Mic aria-hidden="true" />}
              </button>

              <button
                className="rhn-call rhn-end-call"
                type="button"
                onClick={() => endCall()}
              >
                <PhoneOff aria-hidden="true" />
                End call
              </button>
            </div>
          ) : (
            <button
              className="rhn-call"
              type="button"
              disabled={callState === "connecting"}
              onClick={startCall}
            >
              <Mic aria-hidden="true" />
              {callState === "connecting" ? "Connecting..." : "Call now"}
            </button>
          )}

          <small role={callError ? "alert" : undefined}>
            {callError || "AI patient navigator. General guidance only."}
          </small>
        </section>
      ) : (
        <div className="rhn-launcher">
          <button
            className="rhn-main"
            type="button"
            aria-expanded="false"
            onClick={() => setOpen(true)}
          >
            {avatar()}

            <span className="rhn-copy">
              <strong>Need a hand?</strong>
              <small>Talk with {agentName} about this page</small>
            </span>
          </button>

          <button
            className="rhn-mic"
            type="button"
            aria-label={`Open ${agentName}`}
            title={`Open ${agentName}`}
            onClick={() => setOpen(true)}
          >
            <Mic aria-hidden="true" />
          </button>
        </div>
      )}
    </aside>
  );
}
