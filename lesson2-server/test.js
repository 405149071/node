// 自己码码
const http = require("http");

var server = http.createServer(function(req,res){
  //console.console.log("有人来了");
  switch(req.url){
    case '/1.html':
      res.write("111111");
      break;
    case '/2.html':
      res.write("222222");
      break;
    default:
      res.write("404");
      break;
  }
  //res.write("abc");
  res.end();
});

server.listen("8080");
