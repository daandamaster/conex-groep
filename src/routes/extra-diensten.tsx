import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { AdviceCta, PageHero } from "@/components/page-blocks";
import { EXTRA_SERVICES } from "@/lib/content";

export const Route = createFileRoute("/extra-diensten")({ component: Page });

function Page() {
  return (
    <SiteShell>
      <PageHero eyebrow="Aanvullend" title="Extra diensten voor professionals">
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
          Dezelfde diepte als je van een gevestigde zp-dienstverlener verwacht: juridisch,
          administratief, verzekering en netwerk. Niet verplicht. Wel beschikbaar.
        </p>
      </PageHero>
      <div className="wide-content">
        <div className="services-grid">
          {EXTRA_SERVICES.map((s) => (
            <div className="service-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
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
