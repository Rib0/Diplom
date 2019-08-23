module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('cssnano')({
      preset: 'default',
    }),
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 0,
      autoprefixer: { grid: true },
      features: {
        'custom-media-queries': true,
        'nesting-rules': true,
      },
      importFrom: './src/base.css',
    }),
  ],
};
