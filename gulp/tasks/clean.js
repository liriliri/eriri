var gulp = require('gulp'),
    del = require('del');

var rollupCfg = require('../config/rollup.js');

gulp.task('clean', function ()
{
    return del(rollupCfg.dest);
});