const gulp = require("gulp");
const rename = require("gulp-rename");
const svgSprite = require("gulp-svg-sprite");
const gulpif = require("gulp-if");

let path = require("./path.js");

module.exports = function svgsprite() {
   let src = "src/img/**/*.svg";
   let dist = "dist/img/sprite";

   let config = {
		
      mode: {
         css: {
				dest: ".",
				view: true, 
				prefix: "._",
				bust: false,
      		//cssFile: "sprite1.less",
      		sprite: "sprite.svg",
				layout: "horizontal",
				dimensions: true,
				render: {
					less: {
						dest: "sprite.less"
					}
				}

         },
      },
   };

   return gulp.src(src).pipe(svgSprite(config)).pipe(gulpif("*.less", gulp.dest("src/less/utils"), gulp.dest(dist)));
};
