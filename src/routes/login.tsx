import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <Link to="/" className="logo" style={{ marginBottom: 6 }}>
          <div className="logo-icon">C</div>
          <div>
            CONEX<span>GROEP</span>
          </div>
        </Link>
        <p className="sub">Log in op jouw persoonlijke portal</p>
        {authEnabled ? (
          <div className="flex flex-col gap-3">
            {GROK_PROVIDERS.map((p) => (
              <button
                key={p.providerId}
                type="button"
                className="login-btn"
                onClick={() => signIn(p.providerId, { callbackURL: "/portal" })}
              >
                Doorgaan met {p.label}
              </button>
            ))}
          </div>
        ) : (
          <p className="sub">Inloggen is uitgeschakeld.</p>
        )}
        <p style={{ marginTop: 20, textAlign: "center", color: "var(--text-muted)", fontSize: "0.88rem" }}>
          <Link to="/">← Terug naar home</Link>
        </p>
      </div>
    </div>
  );
}
