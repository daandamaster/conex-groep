import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-blocks";
import { ARTICLE_CATEGORIES, ARTICLES } from "@/lib/articles";

export const Route = createFileRoute("/kenniscentrum/")({
  head: () => ({
    meta: [
      { title: "Kenniscentrum | Conex Groep" },
      {
        name: "description",
        content:
          "Blogs over Wet DBA, schijnzelfstandigheid, tarieven, g-rekening en werkvormen in de techniek.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const [cat, setCat] = useState<(typeof ARTICLE_CATEGORIES)[number]>("Alles");
  const list = useMemo(
    () => (cat === "Alles" ? ARTICLES : ARTICLES.filter((a) => a.category === cat)),
    [cat],
  );

  return (
    <SiteShell>
      <div className="article-wrap">
        <PageHero eyebrow="Kenniscentrum" title="Inzicht voor vakmensen en opdrachtgevers">
          <p>
            Wet DBA, tarieven, g-rekening, werkvormen. Geen krantenkoppen — praktijk uit Almere,
            bouwplaats en werkplaats.
          </p>
        </PageHero>
        <div className="wide-content">
          <div className="blog-filters">
            {ARTICLE_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                className={`blog-chip${cat === c ? " is-on" : ""}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="blog-count">{list.length} artikelen</p>
          <div className="blog-grid">
            {list.map((a) => (
              <Link
                key={a.slug}
                to="/kenniscentrum/$slug"
                params={{ slug: a.slug }}
                className="blog-card"
              >
                <div className="blog-card-img">
                  <img src={a.cover} alt="" />
                </div>
                <div className="blog-card-body">
                  <span className="news-meta">
                    {a.category} · {a.minutes} min · {a.date}
                  </span>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <span className="news-more">Lees het artikel</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
