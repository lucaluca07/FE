Function.prototype.call2 = function (context) {
  if (!context) context = window;
  const args = Array.from(arguments).slice(1);
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

bar.call2(foo, "kevin", 18);
