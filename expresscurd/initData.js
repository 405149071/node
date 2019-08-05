const fs = require("fs")
const path = require("path")
const mock = require("mockjs")

const jsondb = require("./db.json")
// 初始化users属性
jsondb.users || (jsondb.users = [])

// 代码加入数据
// for (var i = 0; i < 33; i++) {
//     jsondb.users.push({
//         id: 10000 + i,
//         name: 'aicoder' + i,
//         phone: "158" + i,
//         email: "abc@qq.com" + i
//     })
// }

// mock加入数据
let data = mock.mock({
    "users|33": [{
        "id|+1": 10000,
        "name": "@cname",
        "email": "@email",
        "phone": "@natural(13200000000,13399999999",
        "address": "@county(true)",
        "zip": "@zip"
    }]
})

jsondb.users.push(...data.users)


// 数据写入到dbjson中去
fs.writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(jsondb), {
    encoding: "utf8"
})

console.log("写入数据成功")