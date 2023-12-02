/// <reference types="vitest" />
/// <reference types="vitest/globals" />

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    setupFiles: "./setup.ts",
    globals: true,
    reporters: "verbose",
    isolate: true,
    coverage: {
      include: [
        // 'pages/**/*',
        "constants/**/*",
        "ui/**/*",
        "layouts/**/*",
        "features/**/*",
      ],
      reporter: ["text", "json", "html", "clover"],
      // perFile: true,
      all: true,
      lines: 70,
      branches: 70,
      functions: 70,
      statements: 70,
    },
  },
});
