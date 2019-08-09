// 第一种方法，（有回调）
async function getData() {
    return '这是一个数据'
}

var p = getData() // 本身返回的就是promise， 因为用async限定
// 另外可以用普通方法+return new promise的方式也可以
// new Promise((resolve,reject)=>{
// setTimeout(() => {
//     var name = "zs",
//         resolve(name)
// }, 1000)
//})

p.then((data) => {
    console.log(data)
})

// 第二种方法 await await可以把异步转同步
async function getData2() {
    console.log("22222")
    return '这是一个数据22'
}

async function t() {
    console.log("11111")
    var d = await getData2();
    console.log(d);
    console.log("333333")
}

t();