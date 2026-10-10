"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import {
  linkStatusFromHash,
  worstLinkStatus,
  type LinkStatus,
} from "./link-status";

// The URL fragment is client-side only, so it is read here. useSyncExternalStore
// renders the server's answer (an empty hash) during hydration and re-renders
// with the real fragment straight after — no hydration mismatch.
function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}
const getHash = () => window.location.hash;
const getServerHash = () => "";

export default function EmailConfirmedView({
  initialStatus,
}: {
  /** What the server could tell from the query string. */
  initialStatus: LinkStatus;
}) {
  const hash = useSyncExternalStore(subscribeToHash, getHash, getServerHash);
  const status = worstLinkStatus(initialStatus, linkStatusFromHash(hash));
  const failed = status !== "ok";

  return (
    <section className="mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
      {failed ? (
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary/15 ring-1 ring-brand-primary/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-brand-primary"
            aria-hidden="true"
          >
            <line x1="12" y1="7" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
      ) : (
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-success/15 ring-1 ring-brand-success/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-brand-success"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      )}
      <h1 className="text-4xl font-semibold leading-tight text-brand-cream sm:text-5xl">
        {status === "expired"
          ? "That link has expired"
          : status === "failed"
            ? "That link didn’t work"
            : "Your email is verified."}
      </h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-brand-cream/80">
        {status === "expired" ? (
          <>
            That link has expired or was already used. Open Guitar Atlas, tap
            Sign In, and use &ldquo;Resend verification email&rdquo; &mdash; or
            just sign in if you already confirmed.
          </>
        ) : status === "failed" ? (
          <>That link didn&rsquo;t work. Please try again from the app.</>
        ) : (
          <>
            Thanks for confirming. Open Guitar Atlas and sign in with the email
            and password you just chose — if you still have the app open, go
            back to it and tap &ldquo;I clicked the link, sign me in&rdquo;.
          </>
        )}
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="https://app.guitaratlas.app"
          className="rounded-full bg-brand-primary px-6 py-3 font-body text-sm font-semibold tracking-wide text-brand-cream shadow-lg shadow-brand-primary/30 transition hover:bg-brand-primary/90"
        >
          Open Guitar Atlas
        </a>
        <Link
          href="/"
          className="rounded-full border border-brand-cream/30 px-6 py-3 font-body text-sm font-semibold tracking-wide text-brand-cream transition hover:border-brand-cream/60"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
