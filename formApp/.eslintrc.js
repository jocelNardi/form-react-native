module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: '**/tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['eslintrc.js'],
  plugins: ['react'],
  rules: {
    semi: 'off',
    'no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/semi': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    '@stylistic/indent': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
  },
};
