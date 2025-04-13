// PostCSS configuration
export default {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'custom-media-queries': true
      }
    },
    'postcss-nested': {},
    autoprefixer: {}
  }
};
