const fs = require('fs')
const path = require("path")

fs.readdir(__dirname, function (err, files) {
    // console.log(files, )
    files.forEach(function (item, index) {
        fs.stat(path.join(__dirname, item), function (err, stats) {
            // console.log(item, stats.isFile())
            if (stats.isFile()) {
                console.log(item, "是个file")
            } else {
                console.log(item, "是个dir")
            }
        })
    })
})