const fs = require("fs");

var watch = fs.watch(__dirname);

watch.on("change", (eventType, filename) => {
    if (filename) {
        console.log("1111", eventType, " ", filename);
        // 打印: <Buffer ...>
    }
})

setTimeout(function () {
    watch.close()
}, 60000)


// fs.watch(__dirname, {
//     encoding: 'buffer'
// }, (eventType, filename) => {
//     if (filename) {
//         console.log(filename);
//         // 打印: <Buffer ...>
//     }
// });