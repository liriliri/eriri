var gulp = require('gulp'),
    requireDir = require('require-dir');

requireDir('./gulp/tasks');

gulp.task('default', ['build']);

