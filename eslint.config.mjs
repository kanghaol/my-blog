import next from "eslint-config-next";
import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

export default [
  {
    ignores: [
      "node_modules",
      ".next",
      "out",
      "dist",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",

      
      "@typescript-eslint/no-unused-vars": ["warn"],
      "react-hooks/exhaustive-deps": ["warn"],
    },
  },
  ...next,
];
