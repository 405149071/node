// 1 let const
// 2 模版自负床
let a = "haha";
let b = 99;
console.log(`${a}afafadf${b}`)

// 3 属性和方法的简写
var name = "张三"
var app = {
    name,
    run() {
        console.log(`${this.name}在跑步`)
    }
}
app.run()

//4 回调函数
// 方法外部得到内部的变量
function getData(callback) {
    setTimeout(function () {
        var name = "李四"
        callback(name)
    }, 1000)
}

// 外部获取
getData(function (data) {
    console.log(data + "1111")
})


// promise写法
// 第一种写法
var p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var name = "王五"
        if (Math.random() < 0.5) {
            resolve(name)
        } else {
            reject("error")
        }

    }, 1000)
})

p.then(function (data) {
    console.log(data)
})

// // 第二种写法s
function getData6(resolve, reject) {
    setTimeout(function () {
        var name = "吴六"
        if (Math.random() < 0.9) {
            resolve(name)
        } else {
            reject("error")
        }

    }, 1000)
}

var p6 = new Promise(getData6)

p6.then((data) => {
    console.log(data)
})


//5 箭头函数

// 7 async await
async function getData7() {
    return '这是一个数据'
}

var p7 = getData7() // promise

p7.then((data) => {
    console.log(data)
})