const fs = require("fs")
const path = require("path")

let srcfile = path.join(__dirname, "../fs/a.pdf");
let distfile = path.join(__dirname, "dist.pdf");

let rs = fs.createReadStream(srcfile, )
let ws = fs.createWriteStream(distfile)

rs.pipe(ws);