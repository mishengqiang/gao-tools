export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-order'],
  ignoreFiles: ['node_modules/**/*', 'dist/**/*', 'public/**/*'],
  rules: {
    'color-function-notation': ['legacy', {}],
    'media-feature-range-notation': ['prefix'],
  },
};
