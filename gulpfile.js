const gulp = require('gulp');
const concat = require('gulp-concat');
const pug = require('gulp-pug');
const sass = require('gulp-sass');

//Deal With Index Page Pug
gulp.task('move_index',function(){
    gulp.src('stage/pug/indexPage/index.pug')
        .pipe(pug({pretty:true}))
        .pipe(gulp.dest('dest/html'));
})

//Deal With Index Sass
gulp.task('move_index_sass',function(){
    gulp.src('stage/sass/main.scss')
        .pipe(sass({pretty:true}))
        .pipe(gulp.dest('dest/css'));
})

//Deal With Js Files
gulp.task('move_js_files',function(){
    gulp.src('stage/js/stage/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('stage/js/dest'));
})
//Deal With Js main
gulp.task('move_js',function(){
    gulp.src('stage/js/dest/main.js')
        .pipe(gulp.dest('dest/js'));
})

