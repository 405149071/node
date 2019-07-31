const EventEmitter = require("events")

//自定义时间触发类
class DemoEmitter extends EventEmitter {
    constructor(opt) {
        super(opt);
    }

    init() {
        console.log("init ....", )
        this.emit('init', '12345')
    }

    close() {
        console.log("close...", )
        this.emit('close')
    }
}

let d = new DemoEmitter();

// 触发类内部的init和close方法
d.init();
d.close();

// 注册事件
d.on('init', param => {
    console.log('init事件触发，参数是：', param);
})
d.once('close', () => {
    console.log("触发了close事件")
})
// 触发了自定义的事件
d.init();
d.close();
// 再次触发时，close方法应该是父类内部自己的close，d注册的时候只注册了一次
d.init();
d.close();