const gulp = require("gulp");
const cache = require("gulp-cache");

module.exports = function claerCache () {
	return cache.clearAll();
}
  
