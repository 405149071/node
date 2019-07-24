const path = require("path")

var strpath1 = "/home/wuzz/index.html"
var strpath2 = "c:\\work\\wuzz\\index.html"

console.log(path.basename(strpath1))
console.log(path.basename(strpath2))
console.log(path.basename(strpath1, ".html"))
console.log(path.dirname(strpath1))
console.log(path.win32.dirname(strpath2)) // haha why?

console.log(path.posix.delimiter, )
console.log(path.win32.delimiter)