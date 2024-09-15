const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const terser = require('@rollup/plugin-terser');

module.exports = {
  input: 'js/index.js',
  output: [
    {
      file: 'animate-css.cjs',
      format: 'cjs',
    },
    {
      file: 'animate-css.mjs',
      format: 'es',
    },
    {
      file: 'animate-css.js',
      format: 'umd',
      name: 'AnimateCss',
    },
    {
      file: 'animate-css.min.js',
      format: 'umd',
      name: 'AnimateCss',
      plugins: [terser()],
    },
  ],
  plugins: [resolve(), commonjs()],
};
