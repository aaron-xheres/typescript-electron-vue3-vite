/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  ignorePatterns: ["shims-vue.d.ts"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "brace-style": ["error", "stroustrup", { allowSingleLine: true }],
    "prettier/prettier": ["off", { endOfLine: "auto" }],
  },
};
