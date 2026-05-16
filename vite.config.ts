import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// base obligatorio para GitHub Pages: el sitio vive en /dashboard-sw/ (nombre del repo).
// En dev, abre http://localhost:8080/dashboard-sw/ (Vite respeta `base`).
export default defineConfig(({ mode }) => ({
  base: "/dashboard-sw/",
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["shawllike-erick-unbarbed.ngrok-free.dev"],
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
