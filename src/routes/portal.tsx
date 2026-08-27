import { createFileRoute, Link } from "@tanstack/react-router";
import { signOut } from "@/lib/auth/client";
import { UserButton } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export const Route = createFileRoute("/portal")({ component: Portal });

function Portal() {
  const { user, isPending } = useCurrentUserState();
  const name = user?.displayName ?? "Bezoeker";
  const initials = name.slice(0, 2).toUpperCase();

  return (
    <div style={{ background: "var(--navy)", minHeight: "100vh" }}>
      <div className="portal-header">
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link to="/" className="logo" style={{ fontSize: "1.2rem" }}>
            <div className="logo-icon" style={{ width: 36, height: 36, fontSize: "0.95rem" }}>
              C
            </div>
            <div>
              CONEX<span>GROEP</span>
            </div>
          </Link>
          <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>| Dashboard</span>
        </div>
        <div className="user">
          {isPending ? (
            <div className="h-8 w-32 animate-pulse rounded-full bg-white/10" />
          ) : user ? (
            <UserButton />
          ) : (
            <>
              <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Gast</span>
              <strong>{name}</strong>
              <div className="avatar">{initials}</div>
              <Link to="/login" className="logout-btn">
                Inloggen
              </Link>
            </>
          )}
          {user ? (
            <button type="button" className="logout-btn" onClick={() => void signOut()}>
              Uitloggen
            </button>
          ) : null}
        </div>
      </div>

      <div className="portal-main">
        <h1 style={{ fontSize: "2.1rem", fontWeight: 800, marginBottom: 6 }}>Welkom terug</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: 8 }}>
          Overzicht van activiteiten en opdrachten bij Conex Groep.
        </p>

        <div className="dashboard-grid">
          <div className="stat-card">
            <div className="num">12</div>
            <div className="label">Openstaande opdrachten</div>
          </div>
          <div className="stat-card">
            <div className="num">8</div>
            <div className="label">Geplaatste kandidaten (deze maand)</div>
          </div>
          <div className="stat-card">
            <div className="num">€ 124K</div>
            <div className="label">Omzet (Q1)</div>
          </div>
          <div className="stat-card">
            <div className="num">4.9 ★</div>
            <div className="label">Gemiddelde beoordeling</div>
          </div>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "36px 0 18px" }}>Recente activiteiten</h2>
        <div
          style={{
            background: "var(--card-bg)",
            borderRadius: 16,
            padding: 28,
            border: "1px solid rgba(168,225,12,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              padding: "14px 0",
            }}
          >
            <span>
              <strong>Nieuwe monteur</strong> – Geplaatst bij Bosbouw B.V.
            </span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Vandaag, 10:30</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              padding: "14px 0",
            }}
          >
            <span>
              <strong>Offerte</strong> – Aangevraagd voor Project Electra Zuid
            </span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Gisteren, 14:15</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0" }}>
            <span>
              <strong>Kennisgeving</strong> – ZZP’er Mark J. heeft zijn uren goedgekeurd
            </span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>2 dagen geleden</span>
          </div>
        </div>
      </div>
    </div>
  );
}
