const del = require('del')

module.exports = function cleanFont() {
  return del(`dist/font`);
}