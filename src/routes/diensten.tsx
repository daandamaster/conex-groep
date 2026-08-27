import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/diensten")({
  component: () => <Navigate to="/voor-professionals" />,
});
