// // import fs
// const fs = require('fs');

// console.log("Starting")

// // read file "samples/JavaScript/jquery-1.6.1.min.js"
// const file = fs.readFileSync("samples/JavaScript/jquery-1.6.1.min.js", "utf8")

// let lines = []

// let chars = 0
// // iterate over lines in file
// for (const line of file.split(/\r?\n/)) {
//   lines.push(line)
//   // add line length to chars
//   chars += line.length
// }

// console.log(Math.round(chars / lines.length))



str = "chocolate"
console.log((str.match(/white/g)).length)
// puts str.gsub(/white/).count
