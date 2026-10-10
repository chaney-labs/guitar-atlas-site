// Supabase (GoTrue) reports a failed confirmation link with `error`,
// `error_code` and `error_description` params — in BOTH the query string and
// the URL fragment (the fragment never reaches the server). A good link
// arrives as `?code=…` with none of them.
//
// Only the *kind* of failure is derived here. The provider's
// `error_description` is never read, so it can never end up on screen.

export type LinkStatus = "ok" | "expired" | "failed";

const ERROR_KEYS = ["error", "error_code", "error_description"] as const;

/** Classify one set of URL params (a query string or a fragment). */
export function linkStatusFromParams(params: URLSearchParams): LinkStatus {
  const hasError = ERROR_KEYS.some((key) => (params.get(key) ?? "") !== "");
  if (!hasError) return "ok";
  const code = (params.get("error_code") ?? "").toLowerCase();
  return code.includes("expired") ? "expired" : "failed";
}

/** The query from a Next.js `searchParams` object (values may be arrays). */
export function linkStatusFromSearchParams(query: {
  [key: string]: string | string[] | undefined;
}): LinkStatus {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    const first = Array.isArray(value) ? value[0] : value;
    if (first !== undefined) params.set(key, first);
  }
  return linkStatusFromParams(params);
}

/** A URL fragment such as `#error=access_denied&error_code=otp_expired`. */
export function linkStatusFromHash(hash: string): LinkStatus {
  return linkStatusFromParams(new URLSearchParams(hash.replace(/^#/, "")));
}

/** Any error beats success; "expired" beats a generic failure. */
export function worstLinkStatus(a: LinkStatus, b: LinkStatus): LinkStatus {
  const rank: Record<LinkStatus, number> = { ok: 0, failed: 1, expired: 2 };
  return rank[a] >= rank[b] ? a : b;
}
