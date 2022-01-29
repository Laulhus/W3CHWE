module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-new": "off",
    "import/extensions": "off",
  },
};
