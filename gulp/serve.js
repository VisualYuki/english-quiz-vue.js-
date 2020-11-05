const gulp = require("gulp");

const webp = require("./img/img_webp");
const svg = require("./img/img_svg");
const minPng = require("./img/min_png");
const style = require("./style");
const pug2html = require("./pug2html");
const script = require("./script");
const include_pug2html =  require("./include_pug2html");
const server = require("browser-sync").create();

let path = require("./path.js");

module.exports = function serve(cb) {
   server.init({
      server: {
         baseDir: "dist",
         directory: true,
      },
      open: false,
      port: 3000,
      ghostMode: {
            clicks: false,
            forms: false,
            scroll: false
        }
   });

   gulp.watch("src/img/**/*.{png,jpg,webp}", gulp.series(webp));

   gulp.watch("src/img/**/*.svg", gulp.series(svg));
   gulp
      .watch("src/img/**/*.png", gulp.series(minPng))
      .on("change", server.reload);
   gulp.watch("src/less/**/*.less", style);
	gulp.watch("src/pug/**/*.pug", pug2html);

	//gulp.watch("src/pug/include/*.pug", include_pug2html);

	gulp.watch("src/js/**/*.js", script);

   gulp.watch("src/pug/include/*.pug", include_pug2html);
   gulp.watch("src/pug/layout/*.pug", include_pug2html);
   gulp.watch("src/pug/svg/*.pug", include_pug2html);

   gulp.watch("dist/pages/*.html").on("change", function (event, file){
      server.reload();
   })

   gulp.watch("dist/css/**/*.css").on("change", function (event, file){
      //if (event === "change" || event === "add") {
         server.reload();
       //}
   });
   gulp.watch("dist/img/**/*.{png,jpg,webp,svg}").on("change", server.reload);

   server.watch(['dist/img/**/*.{png,jpg,webp,svg}'], function (event, file) {
    if (event === "change" || event === "add") {
      server.reload();
    }
  });

	gulp.watch("dist/js/**/*.js").on("change", server.reload);


   return cb();
};
