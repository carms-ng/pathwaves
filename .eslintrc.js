module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "no-param-reassign": 0,
    "react/prop-types": 0,
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    quotes: [2, "double", { avoidEscape: true }],
  },
};
