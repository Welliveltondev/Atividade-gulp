const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function comprimeJavascripts() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe.dest('./build/scripts/');
}

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
    gulp.watch('./source/scripts/*js', {ignoreInitial: false}, gulp.series(comprimeJavascripts));
}