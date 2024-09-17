/// <reference types="vitest" />
/// <reference types="vite/client" />

import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react({ plugins: [["@swc/plugin-styled-components", {}]] }),
    svgr({
      svgrOptions: {
        exportType: "default",
        svgo: false,
        ref: true,
      },
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/setupTests.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
