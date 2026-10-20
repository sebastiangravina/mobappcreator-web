// ESLint setup without eslint-config-next.
// eslint-config-next pulls in `braces` (via fast-glob), which has an unpatched
// high-severity advisory (GHSA-vfj7-8cjw-p6xm). These plugins give the same
// core checks: JavaScript, TypeScript and the React hooks rules.
import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default defineConfig([
  globalIgnores([".next/**", "out/**", "build/**", "node_modules/**", "next-env.d.ts"]),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs.flat["recommended-latest"],
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
]);
