import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import App from "./App.tsx";
import "./index.scss";

const oidcConfig = {
  authority: "https://auth.kube.local/realms/local",
  client_id: "invernada-web",
  redirect_uri: "http://localhost:5173/",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>
  </StrictMode >
);
