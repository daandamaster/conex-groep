import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { AdviceCta, PageHero, PointList, Process } from "@/components/page-blocks";
import { PROCESS_DETACH, SERVICES } from "@/lib/content";

export const Route = createFileRoute("/detachering")({ component: Page });

function Page() {
  const s = SERVICES.find((x) => x.slug === "detachering")!;
  return (
    <SiteShell>
      <PageHero eyebrow={s.eyebrow} title={s.title}>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>{s.intro}</p>
      </PageHero>
      <div className="page-content">
        <h2>Een detacheerder die jouw belang dient</h2>
        <p>
          Jij wilt werken zoals het bij jou past: mix van vrijheid en zekerheid. Via
          detachering bij Conex kies je hoe zaken worden geregeld en hoe je wordt
          uitbetaald. Wij sluiten met de opdrachtgever, jij houdt de regie op tarief en
          voorwaarden.
        </p>
        <PointList items={s.points} />
        <h2>Sociale zekerheid</h2>
        <p>
          Je hebt recht op WW, WIA en ziektewet. Tussen opdrachten of bij ziekte is er een
          vangnet. Geen gedwongen ondernemerschap als de opdracht daar niet bij past.
        </p>
        <h2>Transparante verloning</h2>
        <p>
          We rekenen vanaf jouw tarief terug naar netto. Geen verborgen schuiven. In het
          intakegesprek lopen we de strook regel voor regel door.
        </p>
        <h2>Hoe het werkt</h2>
        <Process items={PROCESS_DETACH} />
        <AdviceCta />
      </div>
    </SiteShell>
  );
}
