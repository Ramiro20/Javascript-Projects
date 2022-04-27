import gulp from 'gulp';
import babel from 'gulp-babel';
//import { pipeline } from 'stream';


//gulp.task();
////gulp.src();
//gulp.dest();
//gulp.watch();


gulp.task('es6', () => {
    return gulp.src('./es6/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./es5'))
});