import { Link } from "@tanstack/react-router";
import { COMPANY } from "@/lib/content";
import { CursorGlow, FilmGrain, LimeOrbs, ScrollProgress, SparkField } from "@/components/fx";
import { SiteNav } from "@/components/site-nav";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FilmGrain />
      <LimeOrbs />
      <SparkField />
      <CursorGlow />
      <ScrollProgress />
      <SiteNav />
      {children}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <div className="logo-icon">C</div>
              <div>
                CONEX<span>GROEP</span>
              </div>
            </Link>
            <p>{COMPANY.tagline} Wij verbinden technische talenten met de juiste projecten.</p>
          </div>
          <div className="footer-col">
            <h4>Ik zoek werk</h4>
            <Link to="/vacatures">Vacatures</Link>
            <Link to="/voor-professionals">Werkvormen</Link>
            <Link to="/detachering">Detachering</Link>
            <Link to="/zzp">ZZP</Link>
            <Link to="/aanpak">Onze aanpak</Link>
          </div>
          <div className="footer-col">
            <h4>Ik zoek personeel</h4>
            <Link to="/voor-opdrachtgevers">Voor opdrachtgevers</Link>
            <Link to="/uitzenden">Uitzenden</Link>
            <Link to="/werving-selectie">Werving & selectie</Link>
            <Link to="/adviesgesprek">Vacature uitzetten</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Conex Groep</h4>
            <Link to="/over">Over ons</Link>
            <Link to="/kenniscentrum">Kenniscentrum</Link>
            <Link to="/login">Portal</Link>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginTop: 10 }}>
              <strong>KVK:</strong> {COMPANY.kvk}
              <br />
              <strong>Btw:</strong> {COMPANY.btw}
              <br />
              <br />
              {COMPANY.legal}
              <br />
              {COMPANY.address[0]}
              <br />
              {COMPANY.address[1]}
              <br />
              {COMPANY.phone}
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Conex Groep © 2026</span>
          <span>Algemene voorwaarden · Privacy · Cookie policy</span>
        </div>
      </footer>
    </>
  );
}
