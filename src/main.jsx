import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import posthog from "posthog-js";
import * as Sentry from "@sentry/react";
import "./index.css";
import Buttons from "./App.jsx";

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: '/ingest',
  ui_host: 'https://eu.posthog.com',
  person_profiles: 'identified_only',
});

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  environment: import.meta.env.MODE,
});

Sentry.metrics.count('button_click', 1);
Sentry.metrics.gauge('page_load_time', 150);
Sentry.metrics.distribution('response_time', 200);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Buttons/>);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Buttons />
  </StrictMode>,
);