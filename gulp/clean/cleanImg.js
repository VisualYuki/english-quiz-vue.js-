const del = require('del')

module.exports = function cleanImg() {
  return del(`dist/img`);
}