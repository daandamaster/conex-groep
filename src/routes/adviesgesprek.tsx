import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-blocks";
import { ADVICE_QUESTIONS, COMPANY } from "@/lib/content";

export const Route = createFileRoute("/adviesgesprek")({ component: Page });

function Page() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <SiteShell>
      <PageHero eyebrow="Vrijblijvend" title="Gratis adviesgesprek">
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
          Herken je je in één van deze vragen? Ga dan met ons in gesprek. We geven advies op
          maat — jouw belang eerst.
        </p>
      </PageHero>
      <div className="page-content">
        <ul className="q-list">
          {ADVICE_QUESTIONS.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
        <h2>Plan een gesprek in</h2>
        <p>
          Of bel {COMPANY.phone}. We reageren op werkdagen meestal dezelfde dag.
        </p>
        {sent ? (
          <p style={{ color: "var(--lime)", fontWeight: 600 }}>
            Bedankt. We nemen zo snel mogelijk contact met je op.
          </p>
        ) : (
          <form className="advice-form" onSubmit={onSubmit}>
            <div className="input-group">
              <label htmlFor="naam">Naam</label>
              <input id="naam" name="naam" required placeholder="Jouw naam" />
            </div>
            <div className="input-group">
              <label htmlFor="tel">Telefoon</label>
              <input id="tel" name="tel" type="tel" required placeholder="06 …" />
            </div>
            <div className="input-group">
              <label htmlFor="mail">E-mail</label>
              <input id="mail" name="mail" type="email" required placeholder="jij@bedrijf.nl" />
            </div>
            <div className="input-group">
              <label htmlFor="rol">Ik ben</label>
              <select id="rol" name="rol" required defaultValue="">
                <option value="" disabled>
                  Kies
                </option>
                <option>Professional / vakman</option>
                <option>ZZP’er</option>
                <option>Opdrachtgever</option>
                <option>Intermediair</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="vraag">Waar gaat het over?</label>
              <textarea id="vraag" name="vraag" placeholder="Opdracht, tarief, constructie…" />
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
