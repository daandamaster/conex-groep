import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { AdviceCta, PageHero, PointList, Process } from "@/components/page-blocks";
import { PROCESS_ZZP, SERVICES } from "@/lib/content";

export const Route = createFileRoute("/zzp")({ component: Page });

function Page() {
  const s = SERVICES.find((x) => x.slug === "zzp")!;
  return (
    <SiteShell>
      <PageHero eyebrow={s.eyebrow} title="ZZP in de techniek">
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>{s.intro}</p>
      </PageHero>
      <div className="page-content">
        <h2>Zelfstandig, als de opdracht dat toelaat</h2>
        <p>
          Langdurig fulltime bij één opdrachtgever onder leiding en toezicht: dat is zelden
          een schone ZZP-relatie. Kort resultaatgericht werk met eigen ondernemerschap wél.
          Wij toetsen dat vóór je tekent.
        </p>
        <PointList items={s.points} />
        <h2>Drie stappen</h2>
        <Process items={PROCESS_ZZP} />
        <h2>Als ZZP niet past</h2>
        <p>
          Dan stoppen we niet. We zetten detachering of uitzenden neer, zodat jij op de klus
          kunt blijven en de opdrachtgever geen risico draagt. Dat is de standaard: de
          professional centraal, de constructie schoon.
        </p>
        <AdviceCta />
      </div>
    </SiteShell>
  );
}
