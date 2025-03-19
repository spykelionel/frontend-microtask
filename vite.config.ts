// vitest.config.ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Use global APIs (e.g., `describe`, `it`)
    environment: "jsdom", // Browser-like testing environment
    setupFiles: "./src/setupTests.ts", // Optional setup file
    coverage: {
      provider: "v8", // Use `c8` for coverage
      reporter: ["text", "json", "html"], // Output formats
    },
  },
});
