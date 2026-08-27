import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { AdviceCta } from "@/components/page-blocks";
import { getJob } from "@/lib/content";

export const Route = createFileRoute("/vacatures/$slug")({
  loader: ({ params }) => {
    const job = getJob(params.slug);
    if (!job) throw notFound();
    return job;
  },
  component: JobPage,
});

function JobPage() {
  const job = Route.useLoaderData();
  return (
    <SiteShell>
      <div className="article-wrap">
      <div className="page-hero">
        <div className="article-meta">
          {job.field} · {job.type} · {job.hours}
        </div>
        <h1>{job.title}</h1>
        <p style={{ color: "var(--ink-muted)", fontSize: "1.1rem" }}>
          {job.location} · {job.salary}
        </p>
      </div>
      <div className="page-content">
        <p>{job.excerpt}</p>
        <h2>Wat we bieden</h2>
        <p>
          Een schone constructie, een vast aanspreekpunt en begeleiding tot en met de eerste
          werkdag. Solliciteren gaat via een kort gesprek — geen eindeloos formulier.
        </p>
        <p>
          <Link to="/vacatures">Alle vacatures</Link>
        </p>
        <AdviceCta title="Solliciteer of schrijf je in" body="Laat je gegevens achter. We bellen je terug om te kijken of deze rol — of een andere — past." />
      </div>
      </div>
    </SiteShell>
  );
}
