import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { AdviceCta } from "@/components/page-blocks";
import { getArticle, relatedArticles } from "@/lib/articles";

export const Route = createFileRoute("/kenniscentrum/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} | Conex Groep` : "Artikel | Conex Groep" },
      { name: "description", content: loaderData?.excerpt ?? "" },
    ],
  }),
  notFoundComponent: ArticleMissing,
  component: ArticlePage,
});

function ArticleMissing() {
  return (
    <SiteShell>
      <div className="article-wrap">
        <div className="page-hero">
          <h1>Dit artikel bestaat niet</h1>
          <p>Het is verplaatst of de link klopt niet. Alle blogs staan in het kenniscentrum.</p>
          <p>
            <Link to="/kenniscentrum" className="btn-primary">
              Naar het kenniscentrum
            </Link>
          </p>
        </div>
      </div>
    </SiteShell>
  );
}

function ArticlePage() {
  const article = Route.useLoaderData();
  const related = relatedArticles(article.slug);

  return (
    <SiteShell>
      <div className="article-wrap">
        <div className="article-cover">
          <img src={article.cover} alt="" />
        </div>
        <article className="article-body">
          <div className="article-meta">
            {article.category} · {article.minutes} min lezen · {article.date}
          </div>
          <h1>{article.title}</h1>
          <p className="article-lead">{article.excerpt}</p>
          {article.sections.map((s, i) => (
            <section key={s.heading ?? `s-${i}`}>
              {s.heading ? <h2>{s.heading}</h2> : null}
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
              {s.bullets ? (
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
          <p>
            <Link to="/kenniscentrum">← Alle artikelen</Link>
          </p>
        </article>
        <div className="wide-content">
          <h2 className="section-title">Verder lezen</h2>
          <div className="blog-grid">
            {related.map((a) => (
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
                    {a.category} · {a.minutes} min
                  </span>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <span className="news-more">Lees het artikel</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <AdviceCta
              title="Twijfel over jouw situatie?"
              body="We lopen je opdracht, tarief en werkvorm in één gesprek na. Vrijblijvend."
            />
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
