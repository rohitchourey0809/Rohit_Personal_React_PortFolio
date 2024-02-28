export const env = {
  browser: true,
  es2021: true,
}
export const extend = ['eslint:recommended', 'plugin:react/recommended']
export const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
  ecmaVersion: 'latest',
  sourceType: 'module',
}
export const plugins = ['react']
export const rules = {
  indent: ['error', 4],
  'linebreak-style': ['error', 'windows'],
  quotes: ['error', 'single'],
  semi: ['error', 'always'],
}
