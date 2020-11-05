const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const less = require("gulp-less");
const sourcemaps = require("gulp-sourcemaps");
const shorthand = require("gulp-shorthand");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const gulpif = require("gulp-if");
const newer = require("gulp-newer");
const notify = require("gulp-notify");
const gulpStylelint = require("gulp-stylelint");
var gcmq = require('gulp-group-css-media-queries');

//import {isProd} from '../../gulpfile.js';

let path = require("./path.js");

module.exports = function style() {
   let src = "src/less/main.less";
   let dist = "dist/css";

   let isDev = true;
   let isProd = !isDev;

   return (
      gulp
         //.src(src, {since: gulp.lastRun(style)})
         .src(src)
         //.pipe(newer(dist))
         .pipe(plumber())
         .pipe(
            gulpStylelint({
               failAfterError: false,
               reporters: [
                  {
                     formatter: "string",
                     console: true,
                  },
               ],
            })
         )
         .pipe(gulpif(isProd, sourcemaps.init()))
         .pipe(less())

         .pipe(gulpif(isProd, autoprefixer()))
         .pipe(gulpif(isProd, shorthand()))
         .pipe(
            gulpif(
               isProd,
               cleanCSS(
                  {
                     level: 2,
                  },
                  (details) => {
                     console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`);
                  }
               )
            )
         )
         .pipe(gulpif(isProd,gcmq()))
         .pipe(gulpif(isProd, sourcemaps.write()))
         .pipe(rename({ suffix: ".min" }))
         .pipe(gulp.dest(dist))
   );
};
