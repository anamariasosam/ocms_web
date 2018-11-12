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
  },
  env: {
    browser: true,
  },
}
