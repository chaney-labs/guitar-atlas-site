import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Guitar Atlas — account questions, teacher and student studios, and how to delete your account.",
};

export default function Support() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="font-body text-sm uppercase tracking-[0.25em] text-brand-secondary">
        Support
      </p>
      <h1 className="mt-3 text-5xl font-semibold leading-tight text-brand-cream sm:text-6xl">
        We&rsquo;re here to help.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-brand-cream/80">
        Something not working, or a question about your account? Email us — a
        real person reads every message, usually within 2&ndash;3 business days.
      </p>

      <div className="mt-12 rounded-2xl border border-brand-cream/15 bg-brand-dark-2/40 p-8">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-cream/55">
          Email support
        </p>
        <a
          href="mailto:support@guitaratlas.app?subject=Guitar%20Atlas%20Support"
          className="mt-2 block font-display text-2xl text-brand-cream transition hover:text-brand-primary"
        >
          support@guitaratlas.app
        </a>
        <p className="mt-6 text-brand-cream/70">
          To help us solve it faster, include your device and OS version (or
          your browser, if you use the web app), what you expected to happen,
          and what happened instead.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-2xl text-brand-cream">
          Common questions
        </h2>
        <div className="mt-6 space-y-6 text-brand-cream/80">
          <FAQ q="How do I reset my password?">
            Choose <strong>Forgot password?</strong>{" "}
            on the sign-in screen and we&rsquo;ll email you a reset link. If it
            doesn&rsquo;t arrive,
            check your spam folder — and note that requesting several in a row
            triggers a short cooldown, so wait a minute before trying again.
          </FAQ>

          <FAQ q="Is my Guitar Atlas account the same as my Pedal Steel Atlas account?">
            Yes. The two apps share one account — one sign-in works in both.
          </FAQ>

          <FAQ q="Is Guitar Atlas free?">
            Yes. Everything in Guitar Atlas is free right now — there&rsquo;s no
            subscription, no trial, and nothing to cancel.
            {/* PRICING-CLAUSE: pending owner wording */}
          </FAQ>

          <FAQ q="I’m a student — do I have to pay?">
            No. Guitar Atlas is free for students and teachers alike. Join your
            teacher&rsquo;s studio with their invite code to get started.
          </FAQ>

          <FAQ q="How do I delete my account?">
            Open <strong>Profile</strong> and choose{" "}
            <strong>Delete Account</strong>. This permanently removes your
            account and your content. Because the account is shared,{" "}
            <strong>this also deletes your Pedal Steel Atlas data</strong>. The
            action can&rsquo;t be undone. You can also email us to request
            deletion.
          </FAQ>

          <FAQ q="My teacher can’t see my progress.">
            Progress shows up once you&rsquo;ve opened the assigned piece,
            lesson, or course from your own library. Make sure you&rsquo;re
            online, and that your studio membership is still active — if your
            teacher paused it, your assignments stop updating until it&rsquo;s
            resumed.
          </FAQ>

          <FAQ q="Does it work offline?">
            Practice sessions, saved scales and chords, and pieces you&rsquo;ve
            already loaded work offline. Atlas Chat and adding new content need
            a connection.
          </FAQ>
        </div>
      </div>

      <div className="mt-16 border-t border-brand-cream/10 pt-8 text-brand-cream/70">
        <p>
          For press, partnerships, or privacy and data requests, see our{" "}
          <Link href="/contact" className="text-brand-primary hover:underline">
            contact page
          </Link>
          . You can also read our{" "}
          <Link href="/privacy" className="text-brand-primary hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-brand-primary hover:underline">
            Terms of Service
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function FAQ({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-semibold text-brand-cream">{q}</p>
      <p className="mt-2 leading-relaxed">{children}</p>
    </div>
  );
}
