/**
 * 读取和操作用户数据
 */

// 加载json文件模块
const dbjson = require("../db.json")

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