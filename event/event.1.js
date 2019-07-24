const EventEmitter = require('events');

class myEmitter extends EventEmitter {
    constructor(opt){
        super(opt);
    }

    init(){
        console.log('init ...');
        this.emit('init66','1234');
    }

    close(){
        console.log('结束了');
        this.emit('close');
    }

    oo(){
        console.log('只处理一次');
        this.emit('oo');
    }
}

let d = new myEmitter();

d.on('init66',param =>{
    console.log('init事件触发了，参数是',param);
})

// d.on('close',()=>console.log('close 事件触发了'));


d.once('oo',()=>{
    console.log('oooooooo');
});


d.init();
d.init(); //可以重复触发

d.close();

d.oo();
d.oo(); // 事件就只能处理一次