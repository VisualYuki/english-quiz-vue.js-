const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const webp = require("imagemin-webp");
//const extReplace = require("gulp-ext-replace");
const gulpPngquant = require("gulp-pngquant");
const svgmin = require("gulp-svgmin");

module.exports = function img() {
		
   gulp.task("webp", function () {
		
		let src = "src/img/**/*.{png,jpg,jpeg}";
      let dest = "dist/img";
      return gulp
         .src(src)
         .pipe(
            imagemin([
               webp({
                  quality: 75,
               }),
            ])
         )
         .pipe(gulp.dest(dest));
   });

   gulp.task("svg", function () {
      let src = "src/img/**/*.svg";
      let dest = "dist/img";

      return gulp.src(src).pipe(svgmin()).pipe(gulp.dest(dest));
   });

   gulp.task("imagemin", function () {
		let src = "src/img/**/*.{jpeg,jpg}";
      let dest = "dist/min-img";

      return gulp
         .src(src)
         .pipe(
            imagemin({
               progressive: true,
            })
         )
         .pipe(gulp.dest(dest));
   });

   gulp.task("min-pngquant", function () {
      let src = "src/img/**/*.png";
      let dest = "dist/min-img";
      return gulp
         .src(src)
         .pipe(
            gulpPngquant({
               quality: "65-75",
            })
         )
         .pipe(gulp.dest(dest));
	});

	return gulp.parallel("webp","svg","imagemin","min-pngquant");
	
};
