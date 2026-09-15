"use client";

import Image from "next/image";
import { Mic, X } from "lucide-react";
import { useState } from "react";

export default function StaticRuhanaWidget({
  agentName,
  imageUrl,
  position = "right",
}) {
  const [open, setOpen] = useState(false);

  const avatar = (round = false) => (
    <span className={round ? "rhn-round-avatar" : "rhn-avatar"}>
      <Image
        src={imageUrl}
        alt=""
        fill
        priority
        sizes={round ? "126px" : "84px"}
        style={{
          objectFit: "cover",
          objectPosition: round ? "center 18%" : "center 22%",
          zIndex: 1,
        }}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
      <i aria-hidden="true" />
    </span>
  );

  return (
    <aside
      className={`rhn-static-widget rhn-${position}`}
      aria-label={`${agentName} assistant preview`}
    >
      {open ? (
        <section className="rhn-preview-panel">
          <button
            className="rhn-close"
            type="button"
            aria-label="Close agent preview"
            title="Close"
            onClick={() => setOpen(false)}
          >
            <X aria-hidden="true" />
          </button>

          {avatar(true)}

          <span className="rhn-status">Visual preview</span>
          <strong>Talk with {agentName}</strong>

          <p>
            Ask naturally. Your agent can understand the page your visitor is
            viewing.
          </p>

          <button className="rhn-disabled-call" type="button" disabled>
            <Mic aria-hidden="true" />
            Call now
          </button>

          <small>Connect this website through Ruhana to enable live calls.</small>
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
            aria-label={`Open ${agentName} preview`}
            title={`Open ${agentName}`}
            onClick={() => setOpen(true)}
          >
            <Mic aria-hidden="true" />
          </button>
        </div>
      )}

      <style jsx global>{`
        .rhn-static-widget,
        .rhn-static-widget * {
          box-sizing: border-box;
        }

        .rhn-static-widget {
          position: fixed;
          right: max(22px, env(safe-area-inset-right));
          bottom: max(22px, env(safe-area-inset-bottom));
          z-index: 2147483646;
          color: #172728;
          font-family: var(--font-dm-sans), "Segoe UI", sans-serif;
        }

        .rhn-static-widget.rhn-left {
          right: auto;
          left: max(22px, env(safe-area-inset-left));
        }

        .rhn-launcher {
          display: flex;
          width: min(352px, calc(100vw - 24px));
          height: 122px;
          align-items: center;
          gap: 8px;
          padding: 8px;
          border: 1px solid rgba(47, 121, 123, 0.22);
          border-radius: 18px;
          background: rgba(253, 251, 249, 0.98);
          box-shadow: 0 22px 58px rgba(23, 39, 40, 0.16);
          backdrop-filter: blur(18px);
          transition:
            transform 180ms ease,
            box-shadow 180ms ease;
        }

        .rhn-launcher:hover {
          transform: translateY(-2px);
          box-shadow: 0 26px 68px rgba(23, 39, 40, 0.2);
        }

        .rhn-main {
          display: flex;
          min-width: 0;
          height: 100%;
          flex: 1;
          align-items: center;
          gap: 11px;
          border: 0;
          background: transparent;
          color: inherit;
          padding: 0;
          text-align: left;
          cursor: pointer;
        }

        .rhn-avatar {
          position: relative;
          display: grid;
          width: 84px;
          height: 100%;
          flex: 0 0 84px;
          place-items: center;
          overflow: hidden;
          border-radius: 11px;
          background: #dce7e5;
        }

        .rhn-avatar i,
        .rhn-round-avatar i {
          position: absolute;
          z-index: 2;
          right: 7px;
          bottom: 7px;
          width: 9px;
          height: 9px;
          border: 2px solid rgba(255, 255, 255, 0.94);
          border-radius: 50%;
          background: #2f797b;
          box-shadow: 0 0 0 4px rgba(47, 121, 123, 0.14);
        }

        .rhn-copy {
          display: flex;
          min-width: 0;
          flex: 1;
          flex-direction: column;
          gap: 5px;
        }

        .rhn-copy strong {
          overflow: hidden;
          font-family: var(--font-syne), "Segoe UI", sans-serif;
          font-size: 17px;
          font-weight: 600;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .rhn-copy small {
          overflow: hidden;
          color: #626d6e;
          font-size: 10px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .rhn-mic {
          display: grid;
          width: 47px;
          height: 47px;
          flex: 0 0 47px;
          place-items: center;
          border: 0;
          border-radius: 50%;
          background: #2f797b;
          color: white;
          padding: 0;
          cursor: pointer;
        }

        .rhn-mic:hover {
          background: #255f61;
        }

        .rhn-mic svg,
        .rhn-disabled-call svg,
        .rhn-close svg {
          width: 19px;
          height: 19px;
          stroke-width: 1.8;
        }

        .rhn-main:focus-visible,
        .rhn-mic:focus-visible,
        .rhn-close:focus-visible {
          outline: 3px solid rgba(47, 121, 123, 0.32);
          outline-offset: 2px;
        }

        .rhn-preview-panel {
          position: relative;
          display: flex;
          width: min(352px, calc(100vw - 24px));
          height: 410px;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 30px 24px 22px;
          overflow: hidden;
          border: 1px solid rgba(47, 121, 123, 0.22);
          border-radius: 20px;
          background: linear-gradient(155deg, #fdfbf9, #e5efed);
          box-shadow: 0 24px 70px rgba(23, 39, 40, 0.2);
          text-align: center;
        }

        .rhn-close {
          position: absolute;
          top: 12px;
          right: 12px;
          display: grid;
          width: 34px;
          height: 34px;
          place-items: center;
          border: 1px solid rgba(47, 121, 123, 0.16);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.78);
          color: #526263;
          cursor: pointer;
        }

        .rhn-round-avatar {
          position: relative;
          display: grid;
          width: 126px;
          height: 126px;
          place-items: center;
          margin-bottom: 16px;
          overflow: hidden;
          border: 6px solid rgba(47, 121, 123, 0.22);
          border-radius: 50%;
          background: #dce7e5;
        }

        .rhn-round-avatar i {
          right: 12px;
          bottom: 12px;
          width: 13px;
          height: 13px;
        }

        .rhn-status {
          color: #2f797b;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .rhn-preview-panel > strong {
          margin: 7px 0;
          font-family: var(--font-syne), "Segoe UI", sans-serif;
          font-size: 23px;
          font-weight: 600;
        }

        .rhn-preview-panel > p {
          max-width: 265px;
          margin: 0 0 16px;
          color: #626d6e;
          font-size: 11px;
          line-height: 1.5;
        }

        .rhn-disabled-call {
          display: inline-flex;
          min-width: 154px;
          height: 42px;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border: 0;
          border-radius: 999px;
          background: #2f797b;
          color: white;
          font-size: 10px;
          opacity: 0.72;
        }

        .rhn-preview-panel > small {
          margin-top: 9px;
          color: #6c7879;
          font-size: 9px;
        }

        @media (max-width: 520px) {
          .rhn-static-widget {
            right: 12px;
            bottom: 12px;
          }

          .rhn-static-widget.rhn-left {
            right: auto;
            left: 12px;
          }

          .rhn-launcher {
            height: 108px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rhn-launcher {
            transition: none;
          }
        }
      `}</style>
    </aside>
  );
}
