module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/sort-comp': [
      'error',
      {
        order: ['lifecycle', 'everything-else', 'rendering', 'static-methods'],
        groups: {
          rendering: ['render', '/^render.+$/'],
        },
      },
    ],
    'eslint linebreak-style': [0, 'error', 'windows'],
  },
  env: {
    browser: true,
  },
}
