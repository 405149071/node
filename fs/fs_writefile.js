const fs = require('fs');

const path = require('path');

let filepath = path.join(__dirname, 'wr.txt');

let stream_w = fs.createWriteStream(filepath, {
    flags: 'a'
});

stream_w.on('open', function (fd) {
    console.log('打开写流文件',fd);
});

stream_w.on('data',function(trunk){
    console.log('写数据呢');
});

stream_w.on('close',function(){
    console.log('可写流关闭');
});


for(let i=0;i<100;i++){
    console.log('写数据呢',i);
    stream_w.write("laowu is very good!\r\n")
}

stream_w.end();  // 用close仅仅只能写入一行。