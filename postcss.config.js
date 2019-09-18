module.exports = {
  plugins: [
    // css mixins can be installed
    // bem postcss can be installed
    // install destyle.css
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
