const gulp = require("gulp");
const pug = require("gulp-pug");
const htmlValidator = require("gulp-w3c-html-validator");
const pugLinter = require("gulp-pug-linter");

//посмотреть pug linter

let path = require("./path.js");

module.exports = function dev_pug2html() {
   return gulp.src("src/pug/pages/**/*.pug")
      .pipe(pugLinter({ reporter: "default" }))
		.pipe(pug({
			pretty: true
		}))
      .pipe(htmlValidator())
		.pipe(gulp.dest("dist/dev-pages"))
	};
