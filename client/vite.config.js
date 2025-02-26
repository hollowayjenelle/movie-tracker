import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensures the build output goes to dist/
    emptyOutDir: true, // Clears old builds before new one
  },
});
