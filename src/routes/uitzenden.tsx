import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { AdviceCta, PageHero, PointList } from "@/components/page-blocks";
import { SERVICES } from "@/lib/content";

export const Route = createFileRoute("/uitzenden")({ component: Page });

function Page() {
  const s = SERVICES.find((x) => x.slug === "uitzenden")!;
  return (
    <SiteShell>
      <PageHero eyebrow={s.eyebrow} title={s.title}>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>{s.intro}</p>
      </PageHero>
      <div className="page-content">
        <p>
          Piek in het werk, ziekte of een project dat volgende week start. Uitzenden is de
          snelste schone route: wij zijn werkgever, jij krijgt vakmensen die gescreend zijn
          op diploma, VCA en referenties.
        </p>
        <PointList items={s.points} />
        <h2>Voor vakmensen</h2>
        <p>
          Vast inkomen, begeleiding en zicht op een volgende klus. Geen weken wachten op een
          factuur. Als je later zelfstandig wilt, kijken we samen of dat past.
        </p>
        <AdviceCta />
      </div>
    </SiteShell>
  );
}
