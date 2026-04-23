import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import posthog from "posthog-js";
import "./index.css";
import Buttons from "./App.jsx";

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  person_profiles: "identified_only",
});
console.log(posthog);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Buttons />
  </StrictMode>,
);
