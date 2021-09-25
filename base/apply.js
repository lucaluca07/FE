Function.prototype.apply2 = function (context, args = []) {
  if (!context) context = window;
  context.fn = this;
  const res = context.fn(...args);
  delete context.fn;
  return res;
};

var foo = {
  value: 1,
};

function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}

bar.apply2(foo, ["kevin", 18]);
