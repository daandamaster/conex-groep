import { Link } from "@tanstack/react-router";
import { ARTICLES } from "@/lib/articles";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="page-hero">
      <div className="page-hero-bar" />
      {eyebrow ? <div className="hero-label page-kicker">{eyebrow}</div> : null}
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export function Process({
  items,
}: {
  items: readonly { step: string; title: string; body: string }[];
}) {
  return (
    <ol className="process-list">
      {items.map((item) => (
        <li key={item.step} className="process-item">
          <span className="process-num">{item.step}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function PointList({ items }: { items: readonly string[] }) {
  return (
    <ul className="point-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function AdviceCta({
  title = "Gratis adviesgesprek",
  body = "Welke werkvorm past bij jouw opdracht, tarief en situatie? In één gesprek heb je een helder advies. Vrijblijvend.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <div className="cta-block">
      <h2>{title}</h2>
      <p>{body}</p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <Link to="/adviesgesprek" className="btn-primary">
          Plan een adviesgesprek
        </Link>
        <Link to="/contact" className="btn-secondary">
          Contact
        </Link>
      </div>
    </div>
  );
}

export function NewsGrid({ limit = 3 }: { limit?: number }) {
  return (
    <div className="news-grid">
      {ARTICLES.slice(0, limit).map((a) => (
        <Link key={a.slug} to="/kenniscentrum/$slug" params={{ slug: a.slug }} className="news-card has-cover">
          <div className="news-cover">
            <img src={a.cover} alt="" />
          </div>
          <span className="news-meta">
            {a.category} · {a.date}
          </span>
          <h3>{a.title}</h3>
          <p>{a.excerpt}</p>
          <span className="news-more">Lees verder</span>
        </Link>
      ))}
    </div>
  );
}
