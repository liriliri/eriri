var gulp = require('gulp'),
    rename = require('gulp-rename'),
    rollup = require('gulp-rollup');

var config = require('../config/rollup');

gulp.task('rollup', function ()
{
    return gulp.src(config.entry)
               .pipe(rollup(config))
               .pipe(rename({extname: '.js'}))
               .pipe(gulp.dest(config.dest))
});