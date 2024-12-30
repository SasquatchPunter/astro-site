// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  output: "static",
  redirects: {
    "/admin/[...path]": "/admin",
  },
  integrations: [react()],
});
