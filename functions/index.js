// Cloudflare Pages Function — server-side (edge) 302 from `/` to `/ko/`,
// overriding the static root index.html so the client-side "Redirecting..."
// meta-refresh flash never appears on Cloudflare.
//
// NOTE: `context.redirect()` does not exist in Pages Functions and throws
// "Worker threw exception" (CF Error 1101). Use a plain Response with a
// `Location` header instead — this is the canonical, crash-free pattern.
export function onRequest() {
  return new Response(null, {
    status: 302,
    headers: { Location: '/ko/' },
  });
}
