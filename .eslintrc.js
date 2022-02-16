module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "tsconfigRootDir": __dirname,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["react-hooks", "no-only-tests", "jasmine", "jest", "filenames", "@typescript-eslint", "prettier"],
  "extends": [
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "env": {
    "browser": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "filenames/match-regex": [1, "^([a-z][a-z0-9]*)(-[a-z0-9]+)*(.test|.spec|.stories)?$", true],
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
        "skipTemplates": true
      }
    ],
    "no-console": "error",
    "no-empty-function": ["error", { "allow": ["arrowFunctions"] }],
    "@typescript-eslint/no-empty-function": ["error", { "allow": ["arrowFunctions"] }],
    "@typescript-eslint/camelcase": [0],
    "indent": [2, 2, { SwitchCase: 1}],
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  },
  "overrides": [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parserOptions: {
        project: [
          "./tsconfig.json",
          "./web/tsconfig.json",
          "./packages/*/tsconfig.json",
        ], // Specify it only for TypeScript files
      },
    },
    {
      "files": ["**/*.test.js?(x)", "**/*.test.ts"],
      "env": {
        "jest": true
      },
      "rules": {
        "jest/consistent-test-it": ["error", { "fn": "it", "withinDescribe": "it" }],
        "no-only-tests/no-only-tests": "error",
        "react-hooks/rules-of-hooks": "off"
      }
    },
    {
      "files": ["**/jest.config.js", ""],
      "rules": {
        "@typescript-eslint/no-var-requires": "off",
        "no-console": "off"
      }
    },
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": [
          "warn",
          {
            "allowExpressions": true,
            "allowTypedFunctionExpressions": true
          }
        ]
      }
    }
  ]
}
