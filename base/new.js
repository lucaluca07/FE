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

var person = objectFactory(Otaku, "Kevin", "18");

console.log(person.name); // undefined
console.log(person.habit); // undefined
console.log(person.strength); // 60
console.log(person.age); // 18
