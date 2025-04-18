import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

// Update path to new ui directory
const uiDir = path.resolve(__dirname, "src/");

// Optional alias for easier imports
const alias = {
  "@ui": uiDir,
};

const inputEntries = fs
  .readdirSync(uiDir)
  .filter((file) => file.endsWith(".tsx"))
  .reduce((entries, file) => {
    const name = file.replace(/\.tsx$/, "");
    entries[name] = path.resolve(uiDir, file);
    return entries;
  }, {} as Record<string, string>);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias,
  },
  build: {
    target: "esnext",
    outDir: "dist",
    lib: {
      entry: path.resolve(uiDir, "index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      input: inputEntries,
      output: {
        entryFileNames: "[name].js",
        preserveModules: true,
        preserveModulesRoot: "src/", // <- updated
      },
      external: [
        "react",
        "react-dom",
        "classnames",
        "lodash",
        "@wordpress/components",
        "@wordpress/element",
        "@blockbite/icons",
      ],
      // exclude _dev folder in src
    },
  },
});
