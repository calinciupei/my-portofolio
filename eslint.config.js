import { defineConfig, globalIgnores } from "eslint/config";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import noOnlyTests from "eslint-plugin-no-only-tests";
import jasmine from "eslint-plugin-jasmine";
import jest from "eslint-plugin-jest";
import filenames from "eslint-plugin-filenames";
import typescriptEslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier/recommended";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import js from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y"
import { fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([
  jsxA11y.flatConfigs.recommended,  
  js.configs.recommended,
  typescriptEslint.configs.recommended,
  typescriptEslint.configs.recommendedTypeChecked,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  prettierRecommended,
  {
    languageOptions: {
      parser: tsParser,
      sourceType: "module",

      parserOptions: {
        tsconfigRootDir: __dirname,

        ecmaFeatures: {
          jsx: true
        }
      },

      globals: {
        ...globals.browser
      }
    },

    plugins: {
      "react-hooks": fixupPluginRules(reactHooks),
      "no-only-tests": noOnlyTests,
      jasmine,
      jest,
      filenames,
      "@typescript-eslint": typescriptEslint,
      prettier
    },

    settings: {
      react: {
        version: "detect"
      }
    },

    rules: {
      "filenames/match-regex": ["err", "^([a-z][a-z0-9]*)(-[a-z0-9]+)*(.test|.spec|.stories)?$"],
      "import/named": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "global-require": "off",
      "@typescript-eslint/prefer-interface": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "import/prefer-default-export": "off",

      "no-irregular-whitespace": [
        "error",
        {
          skipTemplates: true
        }
      ],

      "no-console": "error",

      "no-empty-function": [
        "error",
        {
          allow: ["arrowFunctions"]
        }
      ],

      "@typescript-eslint/no-empty-function": [
        "error",
        {
          allow: ["arrowFunctions"]
        }
      ],

      "@typescript-eslint/camelcase": [0],

      indent: [
        2,
        2,
        {
          SwitchCase: 1
        }
      ],

      "prettier/prettier": "error",
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off"
    }
  },
  {
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json", "./web/tsconfig.json", "./packages/*/tsconfig.json"]
      }
    }
  },
  {
    files: ["**/*.test.js?(x)", "**/*.test.ts"],

    languageOptions: {
      globals: {
        ...globals.jest
      }
    },

    rules: {
      "jest/consistent-test-it": [
        "error",
        {
          fn: "it",
          withinDescribe: "it"
        }
      ],

      "no-only-tests/no-only-tests": "error",
      "react-hooks/rules-of-hooks": "off"
    }
  },
  {
    files: ["**/jest.config.js", "**/"],

    rules: {
      "@typescript-eslint/no-var-requires": "off",
      "no-console": "off"
    }
  },
  {
    files: ["**/*.ts", "**/*.tsx"],

    rules: {
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true
        }
      ]
    }
  },
  globalIgnores([
    "**/webpack.*.js",
    "**/*.css.d.ts",
    "**/dist",
    "**/build",
    "**/public",
    "**/eslint.config.js",
    "**/.eslintrc.js",
    "**/babel.config.js",
    "**/jest.config.js",
    "**/jest.share.config.js"
  ])
]);
