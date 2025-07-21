import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig({
  files: ["**/*.js"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      ...globals.node,
    },
  },
  plugins: {
    js,
  },
  rules: {
    ...js.configs.recommended.rules,
  },
});
