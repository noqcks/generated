var fs = require('fs');
var path = require('path');
const generated = require("../lib/generated");

function is_generated(name) {
  filePath = path.join(__dirname + "/../samples", name);
  try {
    var contents = fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    if (e.code !== 'ENOENT') throw err;
    var contents = ''
  }
  g = new generated(name, contents)
  return g.is_generated()
}

module.exports.is_generated = is_generated
