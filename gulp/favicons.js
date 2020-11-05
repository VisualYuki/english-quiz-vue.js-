let gulp = require("gulp");

let path = require("./path.js");

module.exports = function favicons() {
   return gulp.src("src/favicons/*")
   .pipe(gulp.dest("dist/favicons"));
}