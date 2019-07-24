console.log("hello");


console.time("lb1");
for (var i = 0; i < 100000; i++) {
    var a = i + 1;
}
console.timeEnd("lb1")