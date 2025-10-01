import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import reactMemo from "eslint-plugin-react-memo";

export default [
    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: ["./tsconfig.json"],
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            "@typescript-eslint": tseslintPlugin,
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
            "jsx-a11y": jsxA11yPlugin,
            import: importPlugin,
            "simple-import-sort": simpleImportSort,
            "react-memo": reactMemo,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            // TypeScript ESLint rules
            ...tseslintPlugin.configs.recommended.rules,

            // React rules
            ...reactPlugin.configs.recommended.rules,

            // React Hooks
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            // JSX A11y
            "jsx-a11y/alt-text": "warn",

            // Import sorting
            "simple-import-sort/imports": "warn",

            // React memo usage
            "react-memo/require-memo": "off",

            // Clean TypeScript/React combo
            "react/prop-types": "off",
            "react/display-name": "off",
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "off",

            // Misc
            "import/no-unresolved": "off",
        },
    },
];
