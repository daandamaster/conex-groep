import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Conex Groep";
const BASE = "https://garden-beacon-ember-yellow.grok.me";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${APP_NAME} — Bouw · Techniek · Installatie` },
      {
        name: "description",
        content:
          "Conex Groep – uw partner in bouw en technisch personeel. Uitzenden, werving & selectie, detachering en ZZP in de techniek. Almere.",
      },
      { name: "theme-color", content: "#0B1C2D" },
      { property: "og:title", content: "Conex Groep — Bouw · Techniek · Installatie" },
      { property: "og:description", content: "Partner in bouw en technisch personeel. Uitzenden, werving & selectie, detachering en ZZP." },
      { property: "og:image", content: `${BASE}/og.jpg` },
      { property: "og:url", content: BASE },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "canonical", href: BASE },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "LocalBusiness"],
          name: "Conex Groep",
          url: BASE,
          logo: `${BASE}/favicon.svg`,
          telephone: "+31367519799",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Transistorstraat 31",
            addressLocality: "Almere",
            postalCode: "1322CK",
            addressCountry: "NL"
          },
          description: "Uitzenden, werving & selectie, detachering en ZZP in bouw, techniek en installatie.",
          areaServed: "Almere"
        }) }} />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
