import { useState, type FormEvent } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { NewsGrid } from "@/components/page-blocks";
import { CountUp, Reveal, TiltCard, TypeCycle } from "@/components/fx";
import {
  APPROACH,
  BRANCHES,
  CERTS,
  COMPANY,
  COMPARISON,
  FAQ_EMPLOYER,
} from "@/lib/content";

export const Route = createFileRoute("/")({ component: Home });

const TICKER = [
  "Uitzenden",
  "Werving & selectie",
  "Detachering",
  "ZZP-bemiddeling",
  "VCA-screening",
  "DBA-toets",
  "G-rekening",
  "Bouw · Techniek · Installatie",
];

function Home() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [field, setField] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function search(e: FormEvent) {
    e.preventDefault();
    navigate({ to: "/vacatures", search: { q, vak: field } as never });
  }

  return (
    <SiteShell>
      <section className="hero has-video">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero.jpg"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <img className="hero-photo" src="/media/hero.jpg" alt="" />
        <div className="hero-grid" />
        <div className="hero-scan" />
        <div className="hero-stage">
          <div className="hero-content">
            <div className="hero-label stagger-item">Bouw · Techniek · Installatie</div>
            <h1 className="stagger-item">
              Haal het beste uit
              <br />
              elke <TypeCycle />
            </h1>
            <p className="stagger-item">
              Wij vinden het belangrijk dat iedereen in de bouw en techniek met plezier werkt.
              Jouw werk start hier.
            </p>
            <form className="job-search stagger-item" onSubmit={search}>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Functie of trefwoord"
                aria-label="Zoek vacature"
              />
              <select value={field} onChange={(e) => setField(e.target.value)} aria-label="Vakgebied">
                <option value="">Alle vakgebieden</option>
                <option>Bouw</option>
                <option>Techniek</option>
                <option>Installatie</option>
                <option>Kantoor</option>
              </select>
              <button type="submit" className="btn-primary">
                Zoek werk
              </button>
            </form>
          </div>
          <aside className="hero-aside">
            <div className="glass-chip stagger-item">
              <strong>
                <CountUp to={10} suffix="+" />
              </strong>
              <span>jaar in de regio</span>
            </div>
            <div className="glass-chip stagger-item">
              <strong>
                <CountUp to={500} suffix="+" />
              </strong>
              <span>plaatsingen</span>
            </div>
            <div className="glass-chip stagger-item">
              <strong>Almere</strong>
              <span>kantoor & netwerk</span>
            </div>
          </aside>
        </div>
        <div className="hero-slash" />
      </section>

      <div className="ticker" aria-hidden>
        <div className="ticker-track">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={`${t}-${i}`}>
              {t}
              <i />
            </span>
          ))}
        </div>
      </div>

      <div className="band">
        <div className="wrap">
          <Reveal>
            <p className="kicker">Aanpak</p>
            <h2 className="section-title">
              De Conex-<span className="lime">aanpak</span>
            </h2>
            <p className="section-sub">
              Zoeken. Zorgen. Zij-aan-zij. Zo halen medewerkers en werkgevers het beste uit elke
              opdracht.
            </p>
          </Reveal>
          <div className="approach-grid">
            {APPROACH.map((a, i) => (
              <Reveal key={a.title} delay={i * 90}>
                <article className="approach-card" data-n={String(i + 1).padStart(2, "0")}>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link to="/aanpak" className="btn-primary">
              Zo werken wij
            </Link>
          </div>
        </div>
      </div>

      <div className="band band-alt">
        <div className="wrap">
          <Reveal>
            <p className="kicker">Branches</p>
            <h2 className="section-title">Jouw werk start hier — kies je branche</h2>
            <p className="section-sub">Bouw, techniek of installatie. Kies waar jij wilt werken.</p>
          </Reveal>
          <div className="branch-grid">
            {BRANCHES.map((b) => (
              <TiltCard key={b.slug}>
                <Link to="/vacatures" search={{ vak: b.title } as never} className="branch-card">
                  <img src={b.image} alt="" />
                  <div className="txt">
                    <h3>{b.title}</h3>
                    <p>{b.body}</p>
                    <span className="branch-go">Bekijk vacatures →</span>
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
          <div className="stats-panel">
            <div className="stat-item">
              <strong>
                <CountUp to={10} suffix="+" />
              </strong>
              <span>Jaar in de regio</span>
            </div>
            <div className="stat-item">
              <strong>
                <CountUp to={500} suffix="+" />
              </strong>
              <span>Plaatsingen</span>
            </div>
            <div className="stat-item">
              <strong>
                <CountUp to={98} suffix="%" />
              </strong>
              <span>Tevredenheid</span>
            </div>
            <div className="stat-item">
              <strong>Almere</strong>
              <span>Kantoor</span>
            </div>
          </div>
        </div>
      </div>

      <div className="band">
        <div className="wrap">
          <Reveal>
            <p className="kicker">Zekerheid</p>
            <h2 className="section-title">Zeker weten dat je goed zit</h2>
            <p className="section-sub">
              Samenwerking berust op vertrouwen. Wij werken DBA-bewust, met VCA-screening en een
              nette administratie.
            </p>
          </Reveal>
          <div className="cert-marquee">
            <div className="cert-track">
              {[...CERTS, ...CERTS].map((c, i) => (
                <span className="cert-pill" key={`${c}-${i}`}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="band band-alt">
        <div className="wrap">
          <Reveal>
            <p className="kicker">Werkvormen</p>
            <h2 className="section-title">Van uitzenden tot detacheren, wat past bij je?</h2>
            <p className="section-sub">Drie schone routes. Jij kiest wat de klus vraagt.</p>
          </Reveal>
          <div className="compare-grid">
            {COMPARISON.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <article className={`compare-card${i === 1 ? " is-featured" : ""}`}>
                  <h3>{c.title}</h3>
                  <dl>
                    <dt>Contract</dt>
                    <dd>{c.contract}</dd>
                    <dt>Geschikt voor</dt>
                    <dd>{c.fit}</dd>
                    <dt>Praktisch</dt>
                    <dd>{c.note}</dd>
                  </dl>
                  <Link to={c.href} className="btn-secondary" style={{ marginTop: 22 }}>
                    Alles over {c.title.toLowerCase()}
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-split">
        <img src="/media/cta-dusk.jpg" alt="" />
        <div className="cta-copy">
          <p className="kicker lime">Gesprek</p>
          <h2 className="section-title">
            Conex. Werk. <span className="lime">Gewoon goed geregeld.</span>
          </h2>
          <p>
            Mensen en bedrijven zijn succesvoller wanneer het werk gewoon goed geregeld wordt.
            Als we iets beloven, kun je daarop vertrouwen. {COMPANY.phone}
          </p>
          <Link to="/adviesgesprek" className="btn-primary">
            Plan een gesprek
          </Link>
        </div>
      </div>

      <div className="band">
        <div className="wrap">
          <Reveal>
            <p className="kicker">Kennis</p>
            <h2 className="section-title">Onze nieuwste kennis</h2>
          </Reveal>
          <NewsGrid limit={3} />
          <div style={{ marginTop: 28 }}>
            <Link to="/kenniscentrum" className="btn-primary">
              Bekijk alle artikelen
            </Link>
          </div>
        </div>
      </div>

      <div className="band band-alt">
        <div className="wrap">
          <Reveal>
            <p className="kicker">FAQ</p>
            <h2 className="section-title">Veelgestelde vragen van werkgevers</h2>
          </Reveal>
          <div style={{ maxWidth: 800 }}>
            {FAQ_EMPLOYER.map((item, i) => (
              <div className="faq-item" key={item.q}>
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {item.q}
                  <span>{openFaq === i ? "–" : "+"}</span>
                </button>
                {openFaq === i ? <p>{item.a}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
