import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so Streamlit can serve the build from any component path.
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: { outDir: "build" },
});
