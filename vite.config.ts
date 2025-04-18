import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

const uiDir = path.resolve(__dirname, "src/components/ui");

// alias fix
const alias = {
  "@components": path.resolve(__dirname, "src/components"),
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
      entry: path.resolve(__dirname, "src/ui/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      input: inputEntries,
      output: {
        entryFileNames: "[name].js",
        preserveModules: true,
        preserveModulesRoot: "src/ui",
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
    },
  },
});
