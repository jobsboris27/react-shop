var gulp = require('gulp');
var webpack = require('gulp-webpack');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');

livereload({ start: true });

// ======== Html TASKS ============ //
gulp.task('HTML', function () {
    gulp.src('./src/html/*.html')
        .pipe(gulp.dest('./app/'))
        .pipe(livereload())
});

// ======== Js TASKS ============ //
gulp.task('JS', function() {
    gulp.src('./src/scripts/app.js')
        .pipe(webpack({
            module: {
                loaders: [
                    {
                        test: /\.js/,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                        query: {
                            optional: ['runtime'],
                            stage: 0
                        }
                    }
                ]
            }
        }))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('./app/scripts'))
    .pipe(livereload())
});

// ======== Css TASKS ============ //
gulp.task('CSS', function () {
    gulp.src('./src/styles/vars.less')
        .pipe(less())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('./app/styles'))
        .pipe(livereload());
});

// ======== Watch TASKS ============ //
gulp.task('watch', function () {

    gulp.watch('./src/html/**/*.html', ['HTML']);
    gulp.watch('./src/styles/**/**/*.less', ['CSS']);
    gulp.watch('./src/scripts/**/**/*.js', ['JS']);
    livereload.listen();
});

gulp.task('default', ['watch']);