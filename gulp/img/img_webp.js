//const imagemin = require("gulp-imagemin");
//const webpPlugin = require("imagemin-webp");
//const extReplace = require("gulp-ext-replace");
//const gulpPngquant = require("gulp-pngquant");
const gulp = require("gulp");
const gulpWebp = require("gulp-webp");
const newer = require("gulp-newer");

let src = "src/img/**/*.{png,jpg,jpeg}";
let dest = "dist/img";

module.exports = function imgWebp() {
   let src = "src/img/**/*.{png,jpg,jpeg}";
   let dist = "dist/img";
   return gulp.src(src,{since: gulp.lastRun(imgWebp)}).pipe(newer(dist)).pipe(gulpWebp()).pipe(gulp.dest(dist));
};
