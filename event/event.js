const EventEmitter = require('events');

class myEmitter extends EventEmitter {
    constructor(opt){
        super(opt);
    }
}

const myEmit = new  myEmitter();

myEmit.on('event',()=>{
    console.log('触发了一个事件');
})

myEmit.emit('event'); 