// console.log(module);
// console.log(exports);
// console.log(require);
// console.log(__filename);
// console.log(__dirname);

// 引入 02math文件对应的模块
let m = require('./02math.js');
// 调用模块的方法
console.log(m.add(9, 10));