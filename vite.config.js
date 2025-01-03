import { defineConfig } from "vite";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    minify: false,
    target: "ES2022",
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "bitobeats-simple-event-target",
      fileName: "simple-event-target",
    },
  },
  test: {
    coverage: {
      include: ["src/simple-event-target/**/*.{js,ts,jsx,tsx}"],
    },
  },
  plugins: [dts({ exclude: ["**/*.test.*", "**/*.bench.*"] })],
});
