// 对象就是属性和方法的集合
// OOP Object Oriented Programming 
// class Person {

// }
// const xlz = new Person();
let obj = {
    name: '小玲子',
    sayHi() {
        console.log('hello');
    }
}
obj.name 
// 对象
const xlz =  new Object(); // js  Object 函数 也是对象 一切对象的原型
// 对象字面量都基于Object 来构造， 原型式面向对象 

xlz.name = '小玲子'
xlz.sayHi= function() {
    console.log('hello');
}
console.log(xlz); 


//通过构造函数找到对象
//js中用function代替class类的封装
//构造函数也是基于对象
function Person(name, age) {
    this.name=name;
    this.age=age;
}
//实例化
const xlz = new Person('小玲子', 16);
console.log(xlz);

function Cat(name,color){

    this.name = name;
    
    this.color = color;
    
}
    
Cat.prototype.type = "猫科动物";
    
Cat.prototype.eat = function(){alert("吃老鼠")};











