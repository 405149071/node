/**
 * 读取和操作用户数据
 */

// 加载json文件模块
const dbjson = require("../db.json")

const path = require("path")
const fs = require("fs")

// 获取所有用户数据
exports.getUsers = function () {
    // if (dbjson || dbjson.users)
    //     return null;
    return dbjson.users;
}

//分页数据
exports.getPageUsers = function (page, size) {
    if (typeof (page) != 'number' || page <= 0) {
        return {
            code: 0,
            msg: "page参数不符合条件"
        }
    }

    if (typeof (size) != 'number' || size <= 0) {
        return {
            code: 0,
            msg: "size参数不符合条件"
        }
    }

    return {
        users: dbjson.users.slice((page - 1) * size, page * size),
        code: 1,
        msg: "获取数据成功",
    }
}

// 添加用户数据
exports.addUser = function (user) {
    // 判断user对象的数据是否合法
    if (!user.name) {
        return {
            code: 0,
            msg: "用户名不能为空"
        }
    }

    // user.id = Date.now();
    // 把多个对象合并成一个对象
    const newUser = Object.assign({
            id: Date.now()
        },
        user)
    // 把数据存储到json文件中
    dbjson.users.push(newUser);
    _saveJson(dbjson);
    return {
        msg: "保存成功",
        code: 1,
    }
}

//删除用户
exports.delUser = function (id) {
    // 判断user对象的数据是否合法
    if (typeof (id) != "number" || id < 1) {
        return {
            code: 0,
            msg: "用户名不能为空"
        }
    }
    // user.id = Date.now();
    const index = dbjson.users.findIndex(u => u.id == id);
    console.log(index, "找到要删除的用户id")
    // 把数据存储到json文件中
    dbjson.users.splice(index, 1)
    _saveJson(dbjson);
    return {
        msg: "删除成功",
        code: 1,
    }
}

// 取得单个用户信息
exports.getUserById = function (id) {
    if (typeof (id) == "number" && id > 0) {
        return dbjson.users.find(u => u.id == id)
    }
    return null;
}


exports.editUser = function (user) {
    console.log(user, "service收到的数据");
    // 判断user对象的数据是否合法
    if (typeof (user.id) == "" || parseInt(user.id) < 1) {
        return {
            code: 0,
            msg: "用户名不能为空"
        }
    }
    // user.id = Date.now();
    const index = dbjson.users.findIndex(u => u.id == user.id);
    console.log(index, "找到要修改的用户id")
    // 把数据存储到json文件中
    dbjson.users.splice(index, 1, user)
    _saveJson(dbjson);
    return {
        msg: "修改成功",
        code: 1,
    }
}

// 把对象转成json，并保存到db中
function _saveJson(jsonData) {
    const strJson = JSON.stringify(jsonData);
    fs.writeFileSync(path.join(__dirname, "../db.json"), strJson, {
        encoding: 'utf8'
    })
}