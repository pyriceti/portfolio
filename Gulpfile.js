const { src, dest, parallel } = require('gulp');
const pug                     = require('gulp-pug');
const less                    = require('gulp-less');
const minifyCSS               = require('gulp-csso');
const babel                   = require('gulp-babel');
const uglify                  = require('gulp-uglify');
const rename                  = require('gulp-rename');
const htmlmin                 = require('gulp-htmlmin');

function index() {
  return src(['views/index.pug', 'views/404.pug'])
    .pipe(pug())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('public'));
}

function projects() {
  return src(['views/*.pug', '!views/index.pug', '!views/404.pug'])
    .pipe(pug())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('public/projects'));
}

function css() {
  return src('stylesheets/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('public/stylesheets'));
}

function js() {
  return src('javascripts/*.js', { sourcemaps: true })
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('public/javascripts', { sourcemaps: true }));
}

exports.js      = js;
exports.css     = css;
exports.html    = parallel(index, projects);
exports.default = parallel(exports.html, css, js);
