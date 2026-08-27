import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { AdviceCta, PageHero } from "@/components/page-blocks";
import { SERVICE_PATHS, SERVICES, VALUES } from "@/lib/content";

export const Route = createFileRoute("/voor-professionals")({
  component: VoorProfessionals,
});

function VoorProfessionals() {
  return (
    <SiteShell>
      <PageHero eyebrow="Voor professionals" title={<>Werken op de manier die bij jou past</>}>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
          Detachering, ZZP, uitzenden of een vaste rol. Wij zetten de werkvorm neer die bij de
          opdracht én bij jou past — zonder dat jij of de opdrachtgever risico loopt.
        </p>
      </PageHero>
      <div className="wide-content">
        <div className="services-grid">
          {SERVICES.map((s) => (
            <Link key={s.slug} to={SERVICE_PATHS[s.slug]} className="service-card">
              <div className="icon">{s.eyebrow}</div>
              <h3>{s.title}</h3>
              <p>{s.intro}</p>
            </Link>
          ))}
        </div>
        <div className="values-grid" style={{ marginTop: 48 }}>
          {VALUES.map((v) => (
            <div className="value-card" key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <AdviceCta />
        </div>
      </div>
    </SiteShell>
  );
}
