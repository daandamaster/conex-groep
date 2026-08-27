import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-blocks";
import { JOBS } from "@/lib/content";

type VacSearch = { q?: string; vak?: string; type?: string };

export const Route = createFileRoute("/vacatures/")({
  validateSearch: (s: Record<string, unknown>): VacSearch => ({
    q: typeof s.q === "string" ? s.q : undefined,
    vak: typeof s.vak === "string" ? s.vak : undefined,
    type: typeof s.type === "string" ? s.type : undefined,
  }),
  component: Vacatures,
});

function Vacatures() {
  const search = Route.useSearch();
  const [q, setQ] = useState(search.q ?? "");
  const [vak, setVak] = useState(search.vak ?? "");
  const [type, setType] = useState(search.type ?? "");

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return JOBS.filter((j) => {
      if (vak && j.field !== vak) return false;
      if (type && j.type !== type) return false;
      if (!needle) return true;
      return (
        j.title.toLowerCase().includes(needle) ||
        j.location.toLowerCase().includes(needle) ||
        j.excerpt.toLowerCase().includes(needle)
      );
    });
  }, [q, vak, type]);

  return (
    <SiteShell>
      <div className="article-wrap">
        <PageHero title="Vacatures">
          <p>
            Zoek en filter. {JOBS.length} openstaande rollen in bouw, techniek en installatie.
          </p>
        </PageHero>
        <div className="wide-content">
          <div className="filter-bar">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Functie, plaats of trefwoord"
              aria-label="Zoeken"
            />
            <select value={vak} onChange={(e) => setVak(e.target.value)} aria-label="Vakgebied">
              <option value="">Alle vakgebieden</option>
              <option>Bouw</option>
              <option>Techniek</option>
              <option>Installatie</option>
              <option>Kantoor</option>
            </select>
            <select value={type} onChange={(e) => setType(e.target.value)} aria-label="Werkvorm">
              <option value="">Alle werkvormen</option>
              <option>Uitzend</option>
              <option>Detachering</option>
              <option>Vast</option>
              <option>ZZP</option>
            </select>
            <button
              type="button"
              className="btn-secondary"
              style={{ color: "var(--navy)", borderColor: "var(--navy)" }}
              onClick={() => {
                setQ("");
                setVak("");
                setType("");
              }}
            >
              Wissen
            </button>
          </div>
          <p style={{ color: "var(--ink-muted)", marginBottom: 16 }}>{list.length} resultaten</p>
          <div className="vacature-list">
            {list.map((job) => (
              <Link
                key={job.slug}
                to="/vacatures/$slug"
                params={{ slug: job.slug }}
                className="job-card-link"
              >
                <div className="vacature-item">
                  <div>
                    <h4>{job.title}</h4>
                    <div className="meta">
                      {job.location} · {job.field} · {job.hours} · {job.type}
                    </div>
                  </div>
                  <div className="salary">{job.salary}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
