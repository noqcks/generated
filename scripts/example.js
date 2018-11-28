var fs = require('fs');
var path = require('path');

const generated = require("./lib/generated");

var name = "JavaScript/json2_backbone.js"

filePath = path.join("./samples", name);

try {
  var contents = fs.readFileSync(filePath, 'utf8');
} catch (e) {
  if (e.code !== 'ENOENT') throw err;
  var contents = ''
}

g = new generated(name, contents)

console.log(g.is_generated())
