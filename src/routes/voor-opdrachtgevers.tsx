import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { AdviceCta, PageHero, PointList } from "@/components/page-blocks";

export const Route = createFileRoute("/voor-opdrachtgevers")({ component: Page });

function Page() {
  return (
    <SiteShell>
      <PageHero eyebrow="Voor opdrachtgevers" title="Technisch personeel, zonder gedoe">
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
          Inlenen, vast werven of een project bemannen. Schoon ten aanzien van de Wet DBA,
          met vakmensen die morgen kunnen starten.
        </p>
      </PageHero>
      <div className="page-content">
        <h2>Wat je van ons krijgt</h2>
        <PointList
          items={[
            "Geen schijnzelfstandigheid: wij kiezen de constructie die standhoudt",
            "Gecertificeerde vakmensen: VCA, diploma, referenties",
            "Eén aanspreekpunt in Almere",
            "Uitzenden, detacheren of werving & selectie — wat de klus vraagt",
            "Duidelijke tarieven, geen verrassing achteraf",
          ]}
        />
        <h2>Inlenen zonder risico</h2>
        <p>
          Handhaving op arbeidsrelaties is terug. Wie ZZP inkoopt waar gezag zit, loopt
          naheffing. Wij zetten detachering of uitzenden neer zodat jij kunt sturen op de
          bouwplaats zonder dat de Belastingdienst later langskomt.
        </p>
        <p>
          Zoek je een vaste kracht? Dan werven we. Zoek je piekcapaciteit? Dan lenen we uit.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "28px 0" }}>
          <Link to="/werving-selectie" className="btn-secondary">
            Werving & selectie
          </Link>
          <Link to="/uitzenden" className="btn-secondary">
            Uitzenden
          </Link>
          <Link to="/vacatures" className="btn-secondary">
            Openstaande rollen
          </Link>
        </div>
        <AdviceCta title="Vacature aanmelden" body="Bel of plan een gesprek. We zeggen eerlijk of we de rol kunnen vullen — en hoe snel." />
      </div>
    </SiteShell>
  );
}
