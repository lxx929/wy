/*
 * @Author: 刘祥祥 
 * @Date: 2019-02-16 09:43:12 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-02-16 10:45:40
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean-css');

var fs = require('fs');
var url = require('url');
var path = require('path');

gulp.task('scss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(clean())
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('scss'));
});

gulp.task('default', gulp.series('scss', 'watch'));