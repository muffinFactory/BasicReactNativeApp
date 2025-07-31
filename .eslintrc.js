module.exports = {
  root: true,
  extends: [
    "@react-native",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-native-a11y/ios",
    "prettier"
  ],
  plugins: ["import", "prettier"],
  settings: {
    "import/resolver": {
      // For TypeScript aliases from tsconfig
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json"
      },

      // For resolving basic Node imports
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },

      // For fallback or non-TypeScript environments using babel-plugin-module-resolver
      alias: {
        map: [
          ["@assets", "./assets"],
          ["@components", "./src/components"],
          ["@lib", "./src/lib"],
          ["@provider", "./src/provider"],
          ["@services", "./src/services"],
          ["@screens", "./src/screens"],
          ["@storage", "./src/storage"],
          ["@ui", "./src/ui"],
          ["@types", "./src/types"],
          ["src", "./src"]
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    "prettier/prettier": "warn",
    // "no-undef": "off",
    "react-native/no-inline-styles": "off",
    "no-shadow": "off",
    "newline-before-return": "warn",
    "no-unreachable": "warn",
    // eslint-import-order-plugin
    "sort-imports": ["warn", { ignoreCase: true, ignoreDeclarationSort: true }],
    "import/order": [
      "warn",
      {
        groups: [["external", "builtin"], "internal", ["sibling", "parent"], "index"],
        pathGroups: [
          {
            pattern: "@(react|react-native)",
            group: "external",
            position: "before"
          },
          {
            pattern: "@assets/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "@components/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "@lib/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "@provider/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "@services/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "@screens/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "@storage",
            group: "internal",
            position: "after"
          },
          {
            pattern: "@ui/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "@types/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "src/**",
            group: "internal",
            position: "after"
          }
        ],
        pathGroupsExcludedImportTypes: ["internal", "react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        }
      }
    ],
    "import/newline-after-import": [
      "error",
      {
        count: 1
      }
    ]
  }
}
