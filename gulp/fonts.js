const gulp = require("gulp");
const newer = require("gulp-newer");

let path = require("./path.js");

module.exports = function font() {
   let src = "src/fonts/*";
   let dist = "dist/fonts";
   return gulp.src(src, {since: gulp.lastRun(font)}).pipe(newer(dist)).pipe(gulp.dest(dist));
};
