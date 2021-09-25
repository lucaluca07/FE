Function.prototype.bind2 = function (context) {
  const self = this;
  const args1 = Array.prototype.slice.call(arguments, 1);
  function newFn() {
    const args2 = Array.from(arguments);
    return self.apply(this instanceof newFn ? this : context, [...args1, ...args2]);
  };
  newFn.prototype = this.prototype
  return newFn;
};

var foo = {
  value: 1
};

function bar(name, age) {
  this.habit = 'shopping';
  console.log(this.value);
  console.log(name);
  console.log(age);
}

var bindFoo = bar.bind2(foo, 'daisy');
// bindFoo('18');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// 1
// daisy
// 18
