var gulp = require('gulp');

gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');
    var nano = require('gulp-cssnano');

    return gulp.src('./resources/public/css/app.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(nano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./resources/public/css/.'));
});

gulp.task('default', ['autoprefixer']);