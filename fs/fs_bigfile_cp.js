const fs = require('fs');
const path = require('path');

let srcFile = path.join(__dirname, 'a.pdf'); //源文件
let disFile = path.join(__dirname, 'b.pdf'); //目标文件
console.log(srcFile);
console.log(disFile);

let rs = fs.createReadStream(srcFile); // 这块不要utf8,流嘛
let ws = fs.createWriteStream(disFile); //
// cp1 第一种方法

//cp1();

// cp2 第二种方法真简单

cp2();

function cp2(){
    // rs.on('end',function(){
    //     console.log('读取完成');
    // })

    // ws.on('finish',function(){
    //     console.log('写入完成'); 
    // })

    rs.pipe(ws);
}

function cp1() {



    rs.on('open', function (fd) {
        console.log('打开流', fd);
    });



    rs.on('end', function () {
        console.log('结束');
    })

    rs.on('close', function () {
        console.log('关闭');
    })

    rs.on('data', function (trunk) {
        console.log('读数据', trunk);
        if (ws.write(trunk) === false) {
            // 缓冲区满了，暂停读
            rs.pause;
        }

    });

    ws.on('drain', function () {
        // 可写溜数据可以继续写入读时候，让可读流继续读数据
        rs.resume();
    })

}