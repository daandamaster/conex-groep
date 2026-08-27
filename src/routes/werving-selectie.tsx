import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { AdviceCta, PageHero, PointList } from "@/components/page-blocks";
import { SERVICES } from "@/lib/content";

export const Route = createFileRoute("/werving-selectie")({ component: Page });

function Page() {
  const s = SERVICES.find((x) => x.slug === "werving-selectie")!;
  return (
    <SiteShell>
      <PageHero eyebrow={s.eyebrow} title={s.title}>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>{s.intro}</p>
      </PageHero>
      <div className="page-content">
        <p>
          Een calculator, projectleider of servicemonteur die blijft. Wij zoeken in ons
          netwerk en daarbuiten, toetsen vak én klik, en begeleiden tot de eerste werkdag
          zit.
        </p>
        <PointList items={s.points} />
        <AdviceCta title="Vacature uitzetten?" body="Vertel wat je zoekt. We reageren met een realistische inschatting van termijn en markt." />
      </div>
    </SiteShell>
  );
}
