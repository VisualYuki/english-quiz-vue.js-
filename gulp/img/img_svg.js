const gulp = require("gulp");
const svgmin = require("gulp-svgmin");
const newer = require("gulp-newer");

module.exports =  function svg() {
   let src = "src/img/**/*.svg";
   let dist = "dist/img";

   return gulp.src(src).pipe(svgmin()).pipe(gulp.dest(dist));
}

//,{since: gulp.lastRun(svg)}
//.pipe(newer(dist))