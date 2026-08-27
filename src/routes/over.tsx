import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { AdviceCta, PageHero } from "@/components/page-blocks";
import { TEAM_ROLES, VALUES } from "@/lib/content";

export const Route = createFileRoute("/over")({ component: Over });

function Over() {
  return (
    <SiteShell>
      <PageHero eyebrow="Over ons" title={<>Wie zijn wij?</>}>
        <p style={{ color: "var(--ink-muted)", fontSize: "1.1rem" }}>
          Conex Groep is opgericht om technische vakmensen en bedrijven te verbinden. Wij
          behartigen het belang van de professional — en maken inhuur voor opdrachtgevers
          schoon en voorspelbaar.
        </p>
      </PageHero>
      <div className="page-content">
        <h2>Onze lijn</h2>
        <p>
          Iedereen moet kunnen werken voor wie hij wil, zolang hij wil. In de techniek botst
          die wens vaak met wetgeving: langdurige klussen, gezag op de bouwplaats,
          handhaving op de Wet DBA.
        </p>
        <p>
          Daarom werken we volgens een zp-standaard: eerst de situatie, dan de constructie.
          ZZP als het past. Detachering of uitzenden als dat schoner is. Altijd uitlegbaar.
        </p>
        <div className="values-grid" style={{ margin: "28px 0" }}>
          {VALUES.map((v) => (
            <div className="value-card" key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
        <h2>Historie</h2>
        <p>
          Conex Groep groeide vanuit Almere tot een bemiddelaar in bouw, installatie en
          industrie. Integriteit, kwaliteit en duurzaamheid staan centraal. Geen landelijk
          belcentrum: persoonlijk contact, kennis van de praktijk.
        </p>
        <h2>Service in Almere</h2>
        <p>Je wordt geholpen door mensen die de regio en het vak kennen.</p>
        <div className="services-grid" style={{ marginTop: 20 }}>
          {TEAM_ROLES.map((t) => (
            <div className="service-card" key={t.role}>
              <h3>{t.role}</h3>
              <p>{t.focus}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <AdviceCta />
        </div>
      </div>
    </SiteShell>
  );
}
