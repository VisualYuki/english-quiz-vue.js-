const gulp = require("gulp");
const pug = require("gulp-pug");
const htmlValidator = require("gulp-w3c-html-validator");
const pugLinter = require("gulp-pug-linter");
const plumber = require("gulp-plumber");
const newer = require("gulp-newer");
const pugLintStylish = require("puglint-stylish");

module.exports = function pug2html() {
   let src = "src/pug/pages/**/*.pug";
   let dist = "dist/pages";

   return gulp
      .src(src, { since: gulp.lastRun(pug2html) })
      .pipe(newer(dist))
      .pipe(plumber())
      .pipe(pugLinter({ reporter: pugLintStylish }))
      .pipe(
         pug({
            pretty: true,
         })
      )
		.pipe(htmlValidator())
      .pipe(gulp.dest(dist));
};
