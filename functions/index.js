// Cloudflare Pages Function — guarantees a server-side (edge) 302 from `/`
// to the default locale `/ko/`, overriding the static root index.html so the
// client-side "Redirecting..." meta-refresh flash never appears on Cloudflare.
export function onRequest(context) {
  return context.redirect('/ko/', 302);
}
