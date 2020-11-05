const del = require('del')

module.exports = function cleanStyle() {
  return del("dist/css");
}