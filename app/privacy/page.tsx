import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Guitar Atlas privacy policy: what we collect, how we use it, third-party services, AI features, and account deletion.",
};

export default function Privacy() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <header className="border-b border-brand-cream/15 pb-8">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-cream/60">
          Guitar Atlas · Last updated October 14, 2026
        </p>
        <h1 className="mt-3 text-5xl font-semibold leading-tight text-brand-cream">
          Privacy Policy
        </h1>
      </header>

      <div className="prose-content space-y-12 text-brand-cream/85">
        <Section title="Overview">
          <p>
            Guitar Atlas helps users learn guitar and pedal steel, organize
            repertoire, track practice, save curriculum items, and use
            AI-assisted music theory support.
          </p>
        </Section>

        <Section title="Information We Collect">
          <p>Guitar Atlas may collect the following information when you use the app:</p>
          <ul>
            <li>Account information, such as email address and profile details you choose to provide.</li>
            <li>
              User-created learning content, such as pieces, notes, saved
              scales, saved chords, saved curriculum content, practice sessions,
              playlists, course progress, and studio-related learning data.
            </li>
            <li>Chat content you send to Atlas Chat and contextual learning data needed to answer your music-related questions.</li>
            <li>
              Media or file uploads you choose to add to your account. Audio
              stems you upload (for example an isolated guitar track and a
              backing track) are stored privately for your account only and are
              deleted when you delete your account.
            </li>
            <li>
              A plan record for your account (the plan, its status, and its
              start and end dates), which tells the app which features are
              available. Every feature is free today, so this record doesn&apos;t
              limit what you can use. If paid features are offered in the future
              and you buy one, this record would also show that purchase;
              payment details such as card numbers would be handled entirely by
              the payment processors listed below and would never reach our
              servers.
            </li>
            <li>App diagnostics and crash data when crash reporting is enabled.</li>
          </ul>
          <p>
            The tuner uses your microphone to hear the string you are tuning.
            That audio is analyzed on your device and is never recorded or
            uploaded.
          </p>
        </Section>

        <Section title="How We Use Information">
          <p>We use this information to:</p>
          <ul>
            <li>Provide account access and sync your saved learning data.</li>
            <li>Show your pieces, library items, curriculum progress, practice history, and studio content.</li>
            <li>Generate AI-assisted music theory and practice responses in Atlas Chat.</li>
            <li>Improve app reliability, diagnose crashes, and fix bugs.</li>
            <li>Maintain app security and prevent abuse.</li>
          </ul>
        </Section>

        <Section title="AI Features">
          <p>
            Guitar Atlas uses Claude, an AI model provided by Anthropic, PBC,
            for three features:
          </p>
          <ul>
            <li>
              <strong>Atlas Chat.</strong>{" "}Before your first message, the app
              asks for your permission to share data with Anthropic. If you
              agree, each message you send, together with the conversation so
              far and a limited summary of your learning context, is sent to
              Anthropic to generate a response. That context can include your
              most recently opened pieces (title, artist, key, tempo, genre,
              tuning, capo, time signature and learning status), and, when
              relevant to your question, a piece&rsquo;s chord names, video and
              sheet music titles and short excerpts of your piece notes; your
              saved Dojo library item titles, courses and review schedule; and
              a practice summary (recent session dates, minutes and focus
              areas). Your name, email address and uploaded files are not sent.
              You can decline, in which case Atlas Chat is not used and nothing
              is sent.
            </li>
            <li>
              <strong>Piece synopses.</strong>{" "}When the app generates the
              &ldquo;About&rdquo; content for a piece, the piece&rsquo;s title,
              artist and related public music metadata are sent to Anthropic.
            </li>
            <li>
              <strong>Tab import.</strong>{" "}When you import a PDF or image
              of a printed pedal steel tab into the tab editor, the file is
              uploaded to your account and images of its pages and measures,
              along with any notes you add about the document, are sent to
              Anthropic to transcribe them into editable tab. Nothing is sent
              unless you start an import.
            </li>
          </ul>
          <p>
            Requests are sent from our servers to Anthropic&rsquo;s API.
            Anthropic processes this data to provide the responses, and under
            Anthropic&rsquo;s commercial terms it does not use API inputs or
            outputs to train its models. Anthropic may retain data for a limited
            period for trust and safety purposes in line with its own policies (
            <a
              href="https://www.anthropic.com/legal/privacy"
              className="text-brand-primary hover:underline"
            >
              anthropic.com/legal/privacy
            </a>
            ). Atlas Chat conversations are also stored in your Guitar Atlas
            account so you can revisit them, and are deleted with your account.
          </p>
          <p>
            Do not include sensitive personal information in chat messages. AI
            responses may be inaccurate and should be treated as learning
            assistance, not professional advice.
          </p>
        </Section>

        <Section title="Third-Party Services">
          <p>Guitar Atlas uses third-party services to operate app features. These may include:</p>
          <ul>
            <li>Supabase for authentication, database, storage, and Edge Functions.</li>
            <li>
              Apple and Google, if you sign in with Apple or Google: they confirm
              who you are and share your email address and, if you allow it, your
              name (Apple can give a private relay address from Hide My Email
              instead of your real address, and Google also shares a link to your
              profile picture).
            </li>
            <li>Sentry for crash reporting and diagnostics.</li>
            <li>Anthropic (Claude) for Atlas Chat responses, piece synopses, and tab import (see AI Features).</li>
            <li>Music metadata, video, and media API providers for song discovery and enrichment features.</li>
            <li>
              RevenueCat for purchase management. Nothing is sold today, but the
              iOS and macOS apps connect to RevenueCat and, when you sign in,
              share your account id with it (a random identifier, not your email
              address), so that a purchase could be recognized across devices and
              apps if paid features are offered later. If they are, RevenueCat
              would also receive purchase events (product, price, renewal state).
              The web app does not use RevenueCat.
            </li>
            <li>
              Apple App Store, if purchases are offered in the future, for
              purchases made in the iOS and macOS apps.
            </li>
            <li>
              Stripe, if purchases are offered on the web in the future (card
              details would go directly to Stripe and would never be visible to
              us).
            </li>
          </ul>
          <p>Third-party services process data according to their own terms and privacy policies.</p>
        </Section>

        <Section title="Account Deletion">
          <p>
            You can request account deletion from inside the app. Deleting your
            account removes your account and associated saved Guitar Atlas data
            from the production backend, including files you uploaded in Guitar
            Atlas or Pedal Steel Atlas (which share one account), subject to
            legally required retention, backups, and operational logs. Files
            that another user&rsquo;s shared copy still uses, such as a piece a
            teacher shared with a student, are kept for that user.
          </p>
        </Section>

        <Section title="Data Security">
          <p>
            We use reasonable technical measures to protect user data, including
            authenticated access and backend authorization rules. No system can
            be guaranteed completely secure.
          </p>
        </Section>

        <Section title="Children">
          <p>
            Guitar Atlas is not intended for children under 13. Do not use the
            app if you are under 13.
          </p>
        </Section>
      </div>

      <div className="mt-16 rounded-lg border-l-2 border-brand-primary bg-brand-primary/5 p-6">
        <p className="font-semibold text-brand-cream">Contact</p>
        <p className="mt-2 text-brand-cream/85">
          For privacy questions or account support, email{" "}
          <a
            href="mailto:privacy@guitaratlas.app"
            className="text-brand-primary hover:underline"
          >
            privacy@guitaratlas.app
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
