import * as fs from "fs";
import * as path from "path";
import Generated from "../lib/generated";

const name: string = "JavaScript/json2_backbone.js";
const filePath: string = path.join("./samples", name);

let contents: string;
try {
  contents = fs.readFileSync(filePath, "utf8");
} catch (e: any) {
  if (e.code !== "ENOENT") throw e;
  contents = "";
}

const g: Generated = new Generated(name, Buffer.from(contents));

console.log(g.isGenerated());
