// es3-5的类的定义方式

function Human(name, age) {
    this.name = name;
    this.age = age;
}

Human.prototype.show = function () {
    console.log(this.name, this.age);
}

var h = new Human("coder", 19);
h.show();

// 继承也是基于prototype去继承

// es6 中的方式和区别
class Student {
    // 定义构造函数，如果未定义，会默认有一个空的构造函数
    constructor(name, age) {
        // 给实例添加属性
        this.name = name;
        this.age = age;
    }

    // 定义方法 （方法都在原型上),默认不可遍历
    showStu() {
        console.log(this.name, this.age)
    }
    // 属性 get set es5就已经有了 属性
    get Name() {
        return this.name;
    }

    set Name(val) {
        this.name = val;
    }

    // 静态方法
    static Add(a, b) {
        return a + b;
    }
}
// class 定义的必须通过new来实例化
let s = new Student("icoder", 20);
s.showStu();
s.Name = "hahaha";
s.showStu();
console.log(Student.Add(2, 88))

// 继承
class StudentA extends Student {
    constructor(name, age, className) {
        super(name, age); // 必须用super来执行父类的构造函数
        this.className = className;
    }
    // 覆盖父类的方法
    showStu() {
        super.showStu(); // 可以调用父类super的方法
        console.log("name:%s,age:%d,classname:%s", this.name, this.age, this.className)
    }
}

let sa = new StudentA("章三", 50, "A班");
sa.showStu();