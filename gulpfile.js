const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));

function comprimeImages() {
    return (gupl.src)('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function compilaSass() {
    return gulp.src('./source/styles/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles'));
}

exports.default = function() {
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImages));
    gulp.watch('./source/styles/*.sass', {ignoreInitial: false}, gulp.series(compilaSass));
}