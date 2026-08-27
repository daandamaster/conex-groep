import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Building2,
  FileText,
  Handshake,
  Menu,
  Phone,
  Search,
  Users,
  X,
} from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

type Panel = "werk" | "personeel" | null;

const WERK = [
  { to: "/vacatures" as const, title: "Vacatures", hint: "Zoek & filter open rollen", icon: Search },
  { to: "/voor-professionals" as const, title: "Werkvormen", hint: "Detachering, ZZP, uitzenden", icon: Briefcase },
  { to: "/aanpak" as const, title: "Onze aanpak", hint: "Zoeken · Zorgen · Zij-aan-zij", icon: Handshake },
];

const PERSONEEL = [
  { to: "/voor-opdrachtgevers" as const, title: "Voor opdrachtgevers", hint: "Personeel, schoon geregeld", icon: Building2 },
  { to: "/uitzenden" as const, title: "Uitzenden", hint: "Flex bij piek en ziekte", icon: Users },
  { to: "/werving-selectie" as const, title: "Werving & selectie", hint: "Vaste plaatsing, no cure no pay", icon: FileText },
  { to: "/adviesgesprek" as const, title: "Vacature uitzetten", hint: "We bellen je dezelfde dag", icon: Phone },
];

export function SiteNav() {
  const [panel, setPanel] = useState<Panel>(null);
  const [mobile, setMobile] = useState(false);
  const [mobSection, setMobSection] = useState<Panel>(null);
  const { isPending } = useCurrentUserState();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setPanel(null);
    setMobile(false);
    setMobSection(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPanel(null);
        setMobile(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function toggle(next: Panel) {
    setPanel((cur) => (cur === next ? null : next));
  }

  const links = panel === "personeel" ? PERSONEEL : WERK;

  return (
    <>
      <nav className="site-nav">
        <Link to="/" className="logo" onClick={() => setPanel(null)}>
          <div className="logo-icon">C</div>
          <div>
            <div>
              CONEX<span>GROEP</span>
            </div>
            <div className="logo-sub">Bouw · Techniek · Installatie</div>
          </div>
        </Link>

        <div className="nav-desk">
          <div className="nav-pills" role="menubar">
            <button
              type="button"
              className={`nav-pill${panel === "werk" ? " is-on" : ""}`}
              aria-expanded={panel === "werk"}
              onClick={() => toggle("werk")}
            >
              Ik zoek werk
              <span className="nav-chev" />
            </button>
            <button
              type="button"
              className={`nav-pill${panel === "personeel" ? " is-on" : ""}`}
              aria-expanded={panel === "personeel"}
              onClick={() => toggle("personeel")}
            >
              Ik zoek personeel
              <span className="nav-chev" />
            </button>
          </div>
          <Link to="/vacatures" className="nav-plain">
            Vacatures
          </Link>
          <Link to="/over" className="nav-plain">
            Over
          </Link>
          <Link to="/kenniscentrum" className="nav-plain">
            Kennis
          </Link>
          <Link to="/adviesgesprek" className="btn-nav">
            Adviesgesprek
          </Link>
          {isPending ? (
            <div className="h-8 w-16 animate-pulse rounded-full bg-white/10" />
          ) : (
            <>
              <SignedOut>
                <Link to="/login" className="nav-login">
                  Inloggen
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </>
          )}
        </div>

        <button
          className={`nav-toggle${mobile ? " active" : ""}`}
          aria-label={mobile ? "Menu sluiten" : "Menu openen"}
          type="button"
          onClick={() => setMobile((v) => !v)}
        >
          {mobile ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {panel ? (
        <>
          <button type="button" className="mega-scrim" aria-label="Menu sluiten" onClick={() => setPanel(null)} />
          <div className="mega" role="menu">
            <div className="mega-inner">
              <div className="mega-kicker">
                {panel === "werk" ? "Voor vakmensen" : "Voor opdrachtgevers"}
              </div>
              <h3 className="mega-title">
                {panel === "werk" ? "Jouw volgende klus start hier" : "Personeel, gewoon goed geregeld"}
              </h3>
              <div className="mega-grid">
                {links.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.to} to={item.to} className="mega-card" onClick={() => setPanel(null)}>
                      <span className="mega-ico">
                        <Icon size={18} strokeWidth={2.2} />
                      </span>
                      <span>
                        <strong>{item.title}</strong>
                        <small>{item.hint}</small>
                      </span>
                      <ArrowRight className="mega-arrow" size={16} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : null}

      <div className={`nav-mobile${mobile ? " open" : ""}`}>
        <div className="mob-top">
          <span className="mob-hello">Waar zoek je naar?</span>
          <button type="button" className="mob-close" onClick={() => setMobile(false)} aria-label="Sluiten">
            <X size={20} />
          </button>
        </div>

        <button
          type="button"
          className={`mob-card${mobSection === "werk" ? " is-on" : ""}`}
          onClick={() => setMobSection((s) => (s === "werk" ? null : "werk"))}
        >
          <span className="mega-ico">
            <Briefcase size={18} />
          </span>
          <span>
            <strong>Ik zoek werk</strong>
            <small>Vacatures, werkvormen, aanpak</small>
          </span>
          <span className="nav-chev" />
        </button>
        {mobSection === "werk"
          ? WERK.map((item) => (
              <Link key={item.to} to={item.to} className="mob-link" onClick={() => setMobile(false)}>
                {item.title}
                <ArrowRight size={16} />
              </Link>
            ))
          : null}

        <button
          type="button"
          className={`mob-card${mobSection === "personeel" ? " is-on" : ""}`}
          onClick={() => setMobSection((s) => (s === "personeel" ? null : "personeel"))}
        >
          <span className="mega-ico">
            <Building2 size={18} />
          </span>
          <span>
            <strong>Ik zoek personeel</strong>
            <small>Uitzenden, werving, detachering</small>
          </span>
          <span className="nav-chev" />
        </button>
        {mobSection === "personeel"
          ? PERSONEEL.map((item) => (
              <Link key={item.to} to={item.to} className="mob-link" onClick={() => setMobile(false)}>
                {item.title}
                <ArrowRight size={16} />
              </Link>
            ))
          : null}

        <div className="mob-foot">
          <Link to="/over" onClick={() => setMobile(false)}>
            Over ons
          </Link>
          <Link to="/kenniscentrum" onClick={() => setMobile(false)}>
            Kennis
          </Link>
          <Link to="/portal" onClick={() => setMobile(false)}>
            Portal
          </Link>
          <Link to="/contact" onClick={() => setMobile(false)}>
            Contact
          </Link>
        </div>
        <Link to="/adviesgesprek" className="btn-nav mob-cta" onClick={() => setMobile(false)}>
          Adviesgesprek
        </Link>
        {isPending ? null : (
          <>
            <SignedOut>
              <Link to="/login" className="nav-login mob-login" onClick={() => setMobile(false)}>
                Inloggen
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </>
        )}
      </div>
    </>
  );
}
