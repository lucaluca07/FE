function curry(fn, ...rest) {
  let length = fn.length;
  let args = rest
  return function subCurry() {
    args = [...args, ...arguments]
    console.log(args, 111)
    if(args.length === length) {
      return fn.apply(this, args);
    } else {
      return subCurry
    }
  }
}

function curryV2(fn, ...rest) {
  let length = fn.length;
  let args = rest
  return function () {
    args = [...args, ...arguments]
    console.log(args, 111)
    if(args.length === length) {
      return fn.apply(this, args);
    } else {
      return curryV2.apply(this, [fn, ...args]);
    }
  }
}

function add(a, b, c) {
  return a + b + c
}
const fn = curryV2(add, 1)

console.log((fn(2))(3))