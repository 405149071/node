let add = function(a,b){
    return a + b;
}

console.log(add(4,5));

// 1.
let addArrow = (a,b) => a + b;

console.log(addArrow(4,5));

var arr=[1,5,7,3,2,6];
// 数组排序
// arr.sort(function(a,b){
//     return a-b
// });
console.log(arr);

arr.sort((a,b)=> a - b);

console.log(arr);

// 无参数

var a = () =>{
    console.log(this);// 定义的外层的this
}

// 1 个参数
var b = x => a++;

var c = (a,b) => a + b;

var d = (x) => {
    x++;
    x++
}

// 返回对象

var e = (x) => ({ id : "123",name : "obj"});

console.log(e);

// 注意事项
// 1. 函数体的this对象，就是定义时所在的对象，而不是使用时所在的对象
// 2. 不可以当作构造函数，也就是说，不可以使用new，否则会出错
// 3. 不可以使用arguments对象，该对象在函数体内不存在，可以使用rest参数代替
// 4. 不可以使用yield命令，因此尖头函数不能用作generator 函数
// 5. 肩头函数不能用bind绑定this

