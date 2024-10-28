const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "import",
    "jsdoc",
    "@stylistic/ts",
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "standard",
    "plugin:import/typescript",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "tsconfig.json",
  },
  rules: {
    quotes: ["warn", "double"],
    "comma-dangle": ["error", "always-multiline"],
    camelcase: [
      "off",
      {
        properties: "never",
      },
    ],
    "no-unused-vars": "off",
    "require-await": "error",
    indent: "off",
    "@stylistic/ts/indent": ["error", 2, {
      SwitchCase: 1,
      ignoredNodes: [
        "FunctionExpression > .params[decorators.length > 0]",
        "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
        "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key",
      ],
    }],
    "jsdoc/check-alignment": "error",
    "jsdoc/check-indentation": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": [
      "warn",
      {
        ignoreParameters: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": "warn",
    "@stylistic/ts/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "none",
          requireLast: true,
        },
        singleline: {
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/no-floating-promises": "error",
    "import/no-cycle": "error",
    "no-use-before-define": "warn",
    "@typescript-eslint/no-empty-object-type": "warn",
    "@typescript-eslint/no-unsafe-function-type": "warn",
    "@typescript-eslint/no-wrapper-object-types": "warn",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: [
          "default",
        ],
        format: [
          "camelCase",
        ],
      },
      {
        selector: [
          "class",
          "interface",
          "typeAlias",
          "typeParameter",
        ],
        format: [
          "PascalCase",
        ],
      },
      {
        selector: [
          "enum",
        ],
        format: [
          "PascalCase",
        ],
        custom: {
          regex: ".*Enum$",
          match: true,
        },
      },
      {
        selector: [
          "enumMember",
        ],
        format: [
          "UPPER_CASE",
        ],
      },
      {
        selector: [
          "classProperty",
        ],
        modifiers: [
          "static",
        ],
        format: [
          "UPPER_CASE",
        ],
      },
      {
        selector: [
          "objectLiteralProperty",
        ],
        format: null,
      },
      {
        selector: [
          "import",
        ],
        format: ["camelCase", "PascalCase"],
      },
    ],
    "space-before-blocks": "off",
    "@stylistic/ts/space-before-blocks": "error",
    "@stylistic/ts/type-annotation-spacing": "error",
    "no-plusplus": "error",
    "no-useless-concat": "error",
    "prefer-template": "error",
    "@typescript-eslint/await-thenable": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
}
