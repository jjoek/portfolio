module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        tabWidth: 4,
        trailingComma: 'es5',
        printWidth: 100,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
  },
} 