// sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
  name: "site-admin",
  title: "Site Admin",
  projectId: "jyzisse5",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [
      /* your content types here*/
    ],
  },
});
