import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "kjenw70r",

  dataset: "production",

  title: "My Personal Website",

  apiVersion: "2023-12-03",

  basePath: "/admin",

  plugins: [deskTool()],

  schema: { types: schemas },
});

export default config;
