import js from '@eslint/js'
import eslintPluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'
import vueParser from 'vue-eslint-parser'
import globals from 'globals'

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.github/**',
      '**/*.d.ts',
      '.eslintrc.js',
      'coverage/**',
      'public/**'
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        process: 'readonly',
      },
    },
    rules: {
      indent: ['error', 4],
    },
  },
  {
    files: ['**/*.vue'],
    plugins: {
      vue: eslintPluginVue,
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        process: 'readonly',
      },
    },
    rules: {
      ...eslintPluginVue.configs.recommended.rules,
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/no-v-html': 'off',
      'vue/html-indent': ['error', 4],
      'vue/script-indent': ['error', 4],
    },
  },
  {
    files: ['**/*'],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  prettier,
] 