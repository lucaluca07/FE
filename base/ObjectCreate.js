function create(proto, propertyObject) {
  if (propertyObject === null) {
    throw new TypeError();
  }
  var Fn = function () {};
  Fn.prototype = proto;
  var obj = new Fn();
  console.log(obj, propertyObject)
  if (propertyObject !== undefined) {
    Object.defineProperties(obj, propertyObject)
  }

  if (proto === null) {
    // 创建一个没有原型对象的对象，Object.create(null)
    obj.__proto__ = null;
  }

  return obj;
}

var a = { hello: 1 };
var b = create(a, {
  b: {
    value: 'bb',
    enumerable: true
  }});

a.w = "33";
b.c = "44";
console.log(b.hello);
console.log(b.w);
console.log(a.c);
console.log(b.f);
b.w = "55";

console.log(a.w);
