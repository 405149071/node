var fs = require('fs');
var path = require('path');

let readfielpath = path.join(__dirname,'test.js');
console.log('读取文件为',',readfile');
// 异步读取小文件
//readfile();
//  写入文件
writefile();


function writefile(){
    let afilepath = path.join(__dirname,'a.txt');
    fs.writeFile(afilepath,'hello,你好12131',{},function(err){
        console.log('回调线程');
        if(err){
            console.log('错误');
            return;
        }
        console.log('正常写入');
    });

    console.log("主线程");
}



function readfile(){

fs.readFile(readfielpath,{encoding:'utf-8'},function(err,data){
    console.log('进入了回调线程');
    if(err) {
        console.log('发生了错误',err.message); 
        return;
    }
    console.log(data);
});
console.log('主线程');
}