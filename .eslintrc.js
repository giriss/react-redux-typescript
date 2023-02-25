module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
    'react-app',
    'react-app/jest',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-console': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
    'prettier/prettier': 2,
    '@typescript-eslint/triple-slash-reference': 'off',
  },
}
