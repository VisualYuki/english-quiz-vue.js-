//const baseDir = "./frontend/web/dist";
const baseDir = "./dist/";

module.exports =  {
   src: {
      html: "src/pug/pages/*.pug",
      less: "src/less/main.less",
      img: "src/img/**/*.*",
      video: "src/video/**/*.*",
      js: "src/js/*.js",
      libs: "src/js/libs/**/*.js",
      fonts: "src/fonts/**/*.*",
   },
   out: {
      html: baseDir,
      css: baseDir + "/css",
      fonts: baseDir + "/fonts",
      img: baseDir + "/img",
      video: baseDir + "/video",
      js: baseDir + "/js",
      libs: baseDir + "/js/libs",
   },
   //watch: {
   //   html: "src/views/**/*.html",
   //   stylus: "src/stylus/**/*.{styl, css}",
   //   js: "src/js/**/*.js",
   //},
};

//module.exports = function paths() {
//   const paths = {
//      src: {
//         html: "src/views/pages/*.html",
//         stylus: "src/stylus/common.styl",
//         img: "src/img/**/*.*",
//         video: "src/video/**/*.*",
//         js: "src/js/*.js",
//         libs: "src/js/libs/**/*.js",
//         fonts: "src/fonts/**/*.*",
//      },
//      out: {
//         html: baseDir,
//         css: baseDir + "/css",
//         fonts: baseDir + "/fonts",
//         img: baseDir + "/img",
//         video: baseDir + "/video",
//         js: baseDir + "/js",
//         libs: baseDir + "/js/libs",
//      },
//      watch: {
//         html: "src/views/**/*.html",
//         stylus: "src/stylus/**/*.{styl, css}",
//         js: "src/js/**/*.js",
//      },
//   };

//   return paths;
//}; 
