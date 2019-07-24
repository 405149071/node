const fs = require('fs');
const path = require('path');

let filenamepath = path.join(__dirname,'a.pdf');
console.log(filenamepath);

var stream = fs.createReadStream(filenamepath);  // 这块不要utf8,流嘛
stream.on('open',function(fd){
    console.log('打开流',fd);
});

let i = 1;
stream.on('data',function(trunk){
    console.log('接受数据',i,'块：',trunk);
    i++;
});

stream.on('end',function(){
    console.log('结束');
})

stream.on('close',function(){
    console.log('关闭');
})


