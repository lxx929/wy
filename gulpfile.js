/*
 * @Author: 刘祥祥 
 * @Date: 2019-02-16 09:43:12 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-02-17 21:00:53
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean-css');
var server = require('gulp-webserver');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

var fs = require('fs');
var url = require('url');
var path = require('path');

gulp.task('uglify', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(babel({
            presets: 'es2015'
        })).pipe(uglify()).pipe(gulp.dest('./dist/src'));
});

gulp.task('scss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(clean())
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('scss'));
});

gulp.task('server', function() {
    return gulp.src('./src')
        .pipe(server({
            port: 9090,
            open: true,
            livereload: true,
            fallback: 'index.html'
        }));
});

gulp.task('default', gulp.series('scss', 'server', 'watch'));

gulp.task('build', gulp.series('uglify'));