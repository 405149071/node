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
    return {
        users: dbjson.users.slice((page - 1) * size, page * size),
        code: 1,
        msg: "获取数据成功",
    }
}