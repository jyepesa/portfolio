import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const repoName = "portfolio";

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: "./index.html",
        impressum: "./impressum.html",
      },
    },
  },
});
