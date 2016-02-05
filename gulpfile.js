var gulp = require('gulp'),
    ts = require('gulp-typescript');

gulp.task('build', function ()
{
    return gulp.src('src/**/*.ts').pipe(ts({
        out: 'eriri.js'
    })).pipe(gulp.dest('dist'));
});