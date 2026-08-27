import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-blocks";
import { COMPANY } from "@/lib/content";

export const Route = createFileRoute("/contact")({ component: Contact });

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <SiteShell>
      <PageHero title="Contact">
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
          Kosteloos advies? Plan een gesprek of bel {COMPANY.phone}.
        </p>
      </PageHero>
      <div className="page-content">
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Bezoekadres</h3>
            <p>{COMPANY.legal}</p>
            <p>{COMPANY.address[0]}</p>
            <p>{COMPANY.address[1]}</p>
          </div>
          <div className="contact-card">
            <h3>Direct</h3>
            <p>
              <strong>Telefoon:</strong> {COMPANY.phone}
            </p>
            <p>
              <strong>KVK:</strong> {COMPANY.kvk}
            </p>
            <p>
              <strong>Btw:</strong> {COMPANY.btw}
            </p>
            <p style={{ marginTop: 14 }}>
              <Link to="/adviesgesprek" className="btn-primary">
                Adviesgesprek
              </Link>
            </p>
          </div>
        </div>
        <h2 style={{ marginTop: 48 }}>Bel mij terug</h2>
        {sent ? (
          <p style={{ color: "var(--lime)", fontWeight: 600 }}>
            Bedankt. We nemen zo snel mogelijk contact op.
          </p>
        ) : (
          <form onSubmit={onSubmit} style={{ maxWidth: 420, marginTop: 24 }}>
            <div className="input-group">
              <label htmlFor="naam">Naam</label>
              <input id="naam" type="text" placeholder="Jouw naam" required />
            </div>
            <div className="input-group">
              <label htmlFor="tel">Telefoonnummer</label>
              <input id="tel" type="tel" placeholder="06 12 34 56 78" required />
            </div>
            <button type="submit" className="btn-primary" style={{ width: "100%" }}>
              Verstuur verzoek
            </button>
          </form>
        )}
      </div>
    </SiteShell>
  );
}
