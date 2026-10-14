import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Guitar Atlas — questions, feedback, partnership inquiries.",
};

export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="font-body text-sm uppercase tracking-[0.25em] text-brand-secondary">
        Contact
      </p>
      <h1 className="mt-3 text-5xl font-semibold leading-tight text-brand-cream sm:text-6xl">
        Talk to us.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-brand-cream/80">
        Bug reports, feature requests, partnership ideas, teacher feedback —
        all welcome. We read everything.
      </p>

      <div className="mt-12 space-y-6">
        <ContactRow
          label="General + support"
          email="hello@guitaratlas.app"
        />
        <ContactRow
          label="Press & partnerships"
          email="press@guitaratlas.app"
        />
        <ContactRow
          label="Privacy + data requests"
          email="privacy@guitaratlas.app"
        />
      </div>

      <div className="mt-16 rounded-2xl border border-brand-cream/15 bg-brand-dark-2/40 p-8">
        <h2 className="font-display text-2xl text-brand-cream">
          Frequently asked
        </h2>
        <div className="mt-6 space-y-6 text-brand-cream/80">
          <FAQ q="When does Guitar Atlas launch?">
            The web app is live now at{" "}
            <a
              href="https://app.guitaratlas.app"
              className="text-brand-primary hover:underline"
            >
              app.guitaratlas.app
            </a>
            . The iPhone, iPad, and Mac apps are in final pre-release testing,
            with an App Store release coming soon.
          </FAQ>
          <FAQ q="Is Guitar Atlas free?">
            Yes. Everything in Guitar Atlas is free during our launch — no
            subscription, nothing to pay. The same account works in Pedal Steel
            Atlas, which is free too.
          </FAQ>
          <FAQ q="Can I import my existing songs / chord charts?">
            On day one, you can add any piece from Spotify or YouTube and we
            pull metadata + tutorials automatically. PDF + manual import is
            also supported.
          </FAQ>
          <FAQ q="Does it work without an internet connection?">
            Practice sessions, saved scales/chords, and previously-loaded
            pieces work offline. Atlas Chat and adding new content need a
            connection.
          </FAQ>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, email }: { label: string; email: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-brand-cream/10 pb-6 sm:flex-row sm:items-baseline sm:justify-between">
      <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-cream/55">
        {label}
      </p>
      <a
        href={`mailto:${email}`}
        className="font-display text-xl text-brand-cream transition hover:text-brand-primary"
      >
        {email}
      </a>
    </div>
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
