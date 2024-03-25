import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure';
import schemas from "./sanity/schemas/schema";

export default defineConfig({
  title: "bookify",
  projectId: "0i5160or",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});