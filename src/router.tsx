import { createRouter, Link } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

function NotFound() {
  return (
    <main style={{ padding: "120px 24px 80px", textAlign: "center", fontFamily: "Inter, sans-serif" }}>
      <p style={{ fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8BC70A" }}>404</p>
      <h1 style={{ fontSize: "2rem", margin: "8px 0 12px" }}>Pagina niet gevonden</h1>
      <p style={{ color: "#4A5A68", marginBottom: 24 }}>De link werkt niet of de pagina is verplaatst.</p>
      <Link to="/" style={{ background: "#A8E10C", color: "#0B1C2D", padding: "12px 20px", borderRadius: 999, fontWeight: 700 }}>
        Naar home
      </Link>
    </main>
  );
}

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFound,
  });
}