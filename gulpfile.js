'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

const dirs = {
    js: {
        src: './assets/js/src/',
        dest: './assets/js/'
    },
    sass: {
        src: './assets/sass/',
        dest: './assets/css/'
    }
};

gulp.task('sass', () => {
    return gulp.src(dirs.sass.src + 'main.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dirs.sass.dest));
});

gulp.task('js', function() {
    return gulp.src(dirs.js.src + 'scripts.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(dirs.js.dest));
});

gulp.task('watch', function() {
    gulp.watch(dirs.sass.src + '**/*.scss', ['sass']);
    gulp.watch(dirs.js.src + '**/*.js', ['js']);
});
