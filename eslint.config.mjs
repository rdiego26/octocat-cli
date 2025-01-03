import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{ts}"]},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "max-len": ["error", { code: 80 }],
      "indent": ["error", 2, { SwitchCase: 1 }],
      "no-tabs": "error",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  }
];
