var typescript = require('rollup-plugin-typescript');

module.exports = {
    entry: './src/eriri.ts',
    dest: './dist/eriri.js',
    format: 'iife',
    moduleName: 'eriri',
    plugins: [typescript()]
};