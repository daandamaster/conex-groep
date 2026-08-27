import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { AdviceCta, PageHero } from "@/components/page-blocks";
import { APPROACH } from "@/lib/content";

export const Route = createFileRoute("/aanpak")({ component: Page });

function Page() {
  return (
    <SiteShell>
      <PageHero eyebrow="Onze aanpak" title="Haal het beste uit elke werkdag">
        <p style={{ color: "var(--ink-muted)", fontSize: "1.1rem" }}>
          Iedereen in de bouw en techniek moet met plezier kunnen werken. Dat doen we met drie
          stappen die je in alles terugziet.
        </p>
      </PageHero>
      <div className="wide-content">
        <div className="approach-grid">
          {APPROACH.map((a) => (
            <article className="approach-card" key={a.title}>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </article>
          ))}
        </div>
        <div className="page-content" style={{ padding: "48px 0 0", maxWidth: "none" }}>
          <h2>Zoeken</h2>
          <p>
            We beginnen met luisteren. Wat moet er gebeuren, in welke regio, met welke uren en
            welke werkvorm? Pas daarna zoeken we in het netwerk — niet andersom.
          </p>
          <h2>Zorgen</h2>
          <p>
            Contract, uitbetaling, diploma’s, VCA. Wij regelen de randvoorwaarden zodat jij je
            op het werk kunt richten. Voor opdrachtgevers betekent dat: geen gedoe, geen
            naheffing.
          </p>
          <h2>Zij-aan-zij</h2>
          <p>
            Als het schuurt — ziekte, een lastige start, een DBA-vraag — staan we er. Een vast
            gezicht in Almere, bereikbaar op werkdagen.
          </p>
        </div>
        <div style={{ marginTop: 40 }}>
          <AdviceCta />
        </div>
      </div>
    </SiteShell>
  );
}
