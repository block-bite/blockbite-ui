import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import { viteStaticCopy } from "vite-plugin-static-copy";

const srcDir = path.resolve(__dirname, "src");

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(srcDir, "ui.css"),
          dest: ".", // this means it will be copied to `dist/ui.css`
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@ui": srcDir,
    },
  },
  build: {
    target: "esnext",
    outDir: "dist",
    lib: {
      entry: path.resolve(srcDir, "index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      input: fs
        .readdirSync(srcDir)
        .filter((file) => file.endsWith(".tsx"))
        .reduce((entries, file) => {
          const name = file.replace(/\.tsx$/, "");
          entries[name] = path.resolve(srcDir, file);
          return entries;
        }, {}),
      output: {
        entryFileNames: "[name].js",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
      external: [
        "react",
        "react-dom",
        "classnames",
        "lodash",
        "@blockbite/icons",
        /^@wordpress\/.+$/,
      ],
    },
  },
});
