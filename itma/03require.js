// 1. 引入内置模块
const path = require('path');

var t = path.join(__dirname, __filename);

console.log(t);

var tt = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(tt, );

// 2. 引入文件模块 02math文件对应的模块 （可绝对相对路径）
let f = require('./02math.js');
// 调用模块的方法
console.log(f.add(9, 10));

// 3. 文件夹引入 会找package.json里的main对应的文件，（前边匹配上文件夹路径
var fold = require("./");
fold.show();

var fold1 = require("./03ref");
fold1.myshow()

// 4 第三方模块
var stringw = require('string-width')
var num = stringw("我是laoma")
console.log(num)

console.log(module.paths)