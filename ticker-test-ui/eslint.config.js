import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    extends: [eslint.configs.recommended, tseslint.configs.strict],
    files: ["src/**/*.js", "src/**/*.ts", "src/**/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
]);
