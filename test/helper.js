var fs = require('fs');
var path = require('path');
const generated = require("../lib/generated");

function isGenerated(name) {
  filePath = path.join(__dirname + "/../samples", name);
  try {
    var contents = fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    if (e.code !== 'ENOENT') throw err;
    var contents = ''
  }
  g = new generated(name, contents)
  return g.isGenerated()
}

module.exports.isGenerated = isGenerated
