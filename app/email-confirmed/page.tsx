import type { Metadata } from "next";
import EmailConfirmedView from "./EmailConfirmedView";
import { linkStatusFromSearchParams } from "./link-status";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

// A failed link must not announce itself as "Email confirmed" in the tab
// title or a link preview, so the metadata follows the query string too.
// (A failure reported only in the URL fragment is handled by the view.)
export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const status = linkStatusFromSearchParams(await searchParams);
  if (status !== "ok") {
    return {
      title: "Email link problem",
      description: "There was a problem with your Guitar Atlas email link.",
    };
  }
  return {
    title: "Email confirmed",
    description: "Your Guitar Atlas account is verified.",
  };
}

export default async function EmailConfirmed({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const initialStatus = linkStatusFromSearchParams(await searchParams);
  return <EmailConfirmedView initialStatus={initialStatus} />;
}
