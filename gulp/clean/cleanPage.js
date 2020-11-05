const del = require('del')

module.exports = function cleanPage() {
  return del("dist/pages");
}