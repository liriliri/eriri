var typescript = require('rollup-plugin-typescript');

module.exports = {
    entry: 'src/eriri.ts',
    format: 'iife',
    moduleName: 'eriri',
    dest: 'dist',
    plugins: [typescript()]
};