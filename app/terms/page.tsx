import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for using Guitar Atlas.",
};

export default function Terms() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <header className="border-b border-brand-cream/15 pb-8">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-cream/60">
          Guitar Atlas · Last updated October 14, 2026
        </p>
        <h1 className="mt-3 text-5xl font-semibold leading-tight text-brand-cream">
          Terms of Service
        </h1>
      </header>

      <div className="space-y-12 text-brand-cream/85">
        <Section title="Acceptance">
          <p>
            By creating an account or using Guitar Atlas, you agree to these
            terms. If you don&apos;t agree, please don&apos;t use the service.
          </p>
        </Section>

        <Section title="Your Account">
          <p>
            You&apos;re responsible for keeping your login credentials secure
            and for activity that happens under your account. You must be at
            least 13 years old to use Guitar Atlas.
          </p>
        </Section>

        <Section title="Acceptable Use">
          <p>You agree not to:</p>
          <ul>
            <li>Use the service to violate any law or third-party right.</li>
            <li>Upload content you don&apos;t have rights to.</li>
            <li>Attempt to disrupt, reverse-engineer, or abuse the service.</li>
            <li>Harass, threaten, or impersonate other users.</li>
          </ul>
        </Section>

        <Section title="Your Content">
          <p>
            You retain ownership of the pieces, notes, and other content you
            create in Guitar Atlas. By uploading content, you grant us a
            limited license to store and display it for the purpose of
            providing the service to you.
          </p>
          <p>
            We do not claim ownership of your content and we do not sell it to
            third parties.
          </p>
        </Section>

        <Section title="Third-Party Content">
          <p>
            Guitar Atlas surfaces metadata, videos, and other content from
            third-party providers (Spotify, YouTube, etc.). Their terms apply
            when you use their content through our app. We are not responsible
            for third-party content or service availability.
          </p>
        </Section>

        <Section title="Free to Use">
          <p>
            Every feature of Guitar Atlas is free. There is no subscription, no
            trial, and no price, and we don&apos;t ask for any payment details.
            The same account works in Pedal Steel Atlas, which is free too.
          </p>
          {/* PRICING-CLAUSE: pending owner wording */}
        </Section>

        <Section title="Termination">
          <p>
            You can delete your account at any time from inside the app. We
            may suspend or terminate accounts that violate these terms.
          </p>
        </Section>

        <Section title="Disclaimers">
          <p>
            Guitar Atlas is provided &quot;as is&quot; without warranties of any
            kind. We don&apos;t guarantee that the service will be uninterrupted
            or error-free. AI features may produce inaccurate results.
          </p>
        </Section>

        <Section title="Limitation of Liability">
          <p>
            To the maximum extent permitted by law, Guitar Atlas is not liable
            for indirect, incidental, or consequential damages arising from
            your use of the service.
          </p>
        </Section>

        <Section title="Changes">
          <p>
            We may update these terms from time to time. Material changes will
            be communicated through the app or by email. Continued use after
            changes means you accept the updated terms.
          </p>
        </Section>
      </div>

      <div className="mt-16 rounded-lg border-l-2 border-brand-primary bg-brand-primary/5 p-6">
        <p className="font-semibold text-brand-cream">Questions?</p>
        <p className="mt-2 text-brand-cream/85">
          Email{" "}
          <a
            href="mailto:hello@guitaratlas.app"
            className="text-brand-primary hover:underline"
          >
            hello@guitaratlas.app
          </a>
          .
        </p>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <span
        aria-hidden
        className="mb-4 block h-[3px] w-8 rounded bg-brand-primary"
      />
      <h2 className="font-display text-2xl font-bold text-brand-cream">{title}</h2>
      <div className="mt-4 space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul_li]:mb-2 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
