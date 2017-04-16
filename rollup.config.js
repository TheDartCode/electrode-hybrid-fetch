import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

export default {
  entry: 'src/index.js',
  dest: 'dist/index.js',
  plugins: [
    nodeResolve({ jsnext: true, main: true, browser: true }),
    json(),
    commonjs({ include: 'node_modules/**' }),
    babel()
  ],
  format: 'cjs'
};
