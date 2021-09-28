function objectFactory(Constructor, ...rest) {
  var obj = new Object();
  obj.__proto__ = Constructor.prototype;
  var ret = Constructor.apply(obj, rest);

  return typeof ret === "object" ? ret : obj;
}

function Otaku(name, age) {
  this.strength = 60;
  this.age = age;

  return "handsome boy";
}

// 极客时间 重学前端版本
let newMethod = function(Parent, ...rest) {
  // 1.以构造器的prototype属性为原型，创建新对象；
  let child = Object.create(Parent.prototype);
  // 2.将this和调用参数传给构造器执行
  let result = Parent.apply(child, rest);
   // 3.如果构造器没有手动返回对象，则返回第一步的对象
  return typeof result === 'object' ? result : child
}

var person = newMethod(Otaku, "Kevin", "18");

// var person = new Otaku("Kevin", "18")

Otaku.prototype.name = 'hello'

console.log(Otaku.prototype)

console.log(person.name); // undefined
console.log(person.habit); // undefined
console.log(person.strength); // 60
console.log(person.age); // 18

// 构造函数不使用 new 报错

function MyClass() {
  console.log(typeof this, this.__proto__);
  this.myname = "MyClass";
  if (this.__proto__ !== MyClass.prototype) {
    throw new Error("No New");
  }
}
// try {
//   var a = MyClass();
// } catch (error) {
//   console.error(error);
// }

// console.log(this.myname)
