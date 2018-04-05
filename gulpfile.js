const gulp = require('gulp');
const sass = require('gulp-sass');
const gulpImagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();


gulp.task('sass', function(){
    return gulp.src('./src/scss/*') // Задаем исходник
        .pipe(sass()) // Транскопилируем в CSS
        .pipe(gulp.dest('./dest/css/')) // Ложим файл в папку
})

gulp.task('img', function(){
    return gulp.src('./src/img/*') // Задаем исходник
        .pipe(gulpImagemin())
        .pipe(gulp.dest('./dest/img/')) // Ложим файл в папку
})

gulp.task('watch',function () {
    gulp.watch('./src/scss/*', ['sass']);
    gulp.watch('./src/img/*', ['img']);
})

gulp.task('default', ['sass','img','watch'])
