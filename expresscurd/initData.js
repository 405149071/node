const fs = require("fs")
const path = require("path")

const jsondb = require("./db.json")
// 初始化users属性
jsondb.users || (jsondb.users = [])

for (var i = 0; i < 33; i++) {
    jsondb.users.push({
        id: 10000 + i,
        name: 'aicoder' + i,
        phone: "158" + i,
        email: "abc@qq.com" + i
    })
}
// 数据写入到dbjson中去
fs.writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(jsondb), {
    encoding: "utf8"
})

console.log("写入数据成功")