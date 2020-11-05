let gulp = require("gulp");
let rename = require("gulp-rename");

const font = require("./gulp/fonts");
const pug2html = require("./gulp/pug2html");
const clean = require("./gulp/clean/clean");
const style = require("./gulp/style");
const webp = require("./gulp/img/img_webp");
const svg = require("./gulp/img/img_svg");
const minPng = require("./gulp/img/min_png");
const minJpg = require("./gulp/img/min_jpg");
const serve = require("./gulp/serve");
const script = require("./gulp/script");
const cache = require("./gulp/clearCache");
const favicons = require("./gulp/favicons");

const svgSprite = require("./gulp/svgSprite");

const newer = require("gulp-newer");
var imagemin = require("gulp-imagemin");
function min_jpg() {
   let src = "src/img/**/*.{jpeg,jpg}";
   let dist = "dist/min-img";

   return gulp
      .src(src, { since: gulp.lastRun(min_jpg) })
      .pipe(newer(dist))
      .pipe(imagemin())
      .pipe(gulp.dest(dist));
}

const build = gulp.parallel(pug2html, style, script, font, webp, svg, minPng, minJpg);

gulp.task("build", gulp.series(clean, cache, favicons, build));

gulp.task("default", gulp.series(build, favicons, cache, serve));
