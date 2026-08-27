import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/vacatures")({
  component: () => <Outlet />,
});
