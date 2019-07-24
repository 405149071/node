const net = require('net')

let client = net.connect(58888,'127.0.0.1',()=>{
    console.log('已经链接服务器');

})


client.on('data',chunk =>{
    console.log(chunk.toString('utf-8'))
})

client.write('我是老吴，来自客户端');

client.end();

