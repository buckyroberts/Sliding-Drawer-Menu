var gulp = require('gulp');
var sass = require('gulp-sass');

// gulp sass
gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
});

// gulp watch
gulp.task('watch', function (){
    gulp.watch('src/scss/**/*.scss', ['sass']);
});
