const http = require('http');
const connect = require('connect');
const util = require('util')

let app = connect();

// 注册中间件
app.use(function (req, res, next) {
    console.log("1");
    next();
})

app.use(function (req, res, next) {
    console.log("2");
    next();
})

app.use("/api", (req, res, next) => {
    console.log(4);
    next();
})

app.use((req, res) => {
    res.write("ssss");
    console.log(3);
    res.end();
})





app.use((error, req, resp, next) => {
    console.log(error);

});




app.listen(58889, () => {
    console.log('服务器启动，http://127.0.0.1:58889')
})