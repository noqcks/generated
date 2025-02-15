import * as fs from "fs";
import * as path from "path";

import Generated from "../lib/generated";

const name: string = "JavaScript/json2_backbone.js";
const filePath: string = path.join("./samples", name);
const contents = fs.readFileSync(filePath, "utf8");

const g: Generated = new Generated(name, Buffer.from(contents));

console.log(g.isGenerated());
