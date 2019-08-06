// 单元测试

// 步骤
// 1. 定义场景，初始化数据，调用单元代码，判断是否达到预期结果，清理现场数据
const assert = require("assert")
const userService = require("../service/userService.js")

// 定义一个场景 (描述，回调)
describe('userService服务测试', function () {

    // init数据 ,所有用例执行之前
    before(function () {
        console.log("before");
        require("../initData.js")
    })
    // 清理数据，所有用例执行之后
    after(function () {
        console.log("after")
    })

    // 定义测试用例: 测试getUsers方法是否达到预期
    it("#getUsers", function () {
        // 该方法执行后返回一个数组
        var arr = userService.getUsers();
        // 断言用例
        assert.equal(true, Array.isArray(arr));
        assert.equal(arr.length >= 33, true)
    })

    it("#getPageUsers", function () {
        // 33条数据
        const data = userService.getPageUsers(2, 10);
        // {users:[],code:1,msg="获取分页数据成功"}
        // 正常断言
        assert.equal(data.users.length, 10);
        assert.equal(Array.isArray(data.users), true);
        //异常
        const edata = userService.getPageUsers(2, "fafa10");
        assert.equal(edata.users.length, 10);
        assert.equal(Array.isArray(edata.users), true);
    })
})