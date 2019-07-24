const fs = require('fs');
const path = require('path');

let dir = fs.readdir(__dirname,function(err,files){
    // console.log(files);

    files.forEach((item,index) => {
    
        fs.stat(path.join(__dirname,item),function(err,stats){
            // console.log(stats);
            if(stats.isDirectory()){
                console.log("dir:",item);
            }
            if(stats.isFile()){
                console.log("file:",item);
            }
        })
        
        console.log(item);
    });
})