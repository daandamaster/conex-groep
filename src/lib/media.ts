/** Local `/media/...` in preview; GitHub CDN on the published Vercel build. */
const CDN = "https://cdn.jsdelivr.net/gh/daandamaster/conex-groep@main/public/media";

export function media(file: string) {
  const name = file.replace(/^\/media\//, "");
  if (import.meta.env.PROD) return `${CDN}/${name}`;
  return `/media/${name}`;
}
