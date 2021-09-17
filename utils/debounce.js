// const debounce = (fn, delay) => {
//   let timer = null;
//   return (...rest) => {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn(...rest);
//     }, delay);
//   };
// };

// function debounce(fn, delay) {
//   let timer = null;
//   return function() {
//     let context = this;
//     const args = arguments
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(function () {
//       fn.apply(context, args);
//     }, delay);
//   };
// }

// 第四版
function debounce(func, wait, immediate) {

  var timeout;

  return function () {
      var context = this;
      var args = arguments;

      if (timeout) clearTimeout(timeout);
      if (immediate) {
          // 如果已经执行过，不再执行
          var callNow = !timeout;
          timeout = setTimeout(function(){
              timeout = null;
          }, wait)
          if (callNow) func.apply(context, args)
      }
      else {
          timeout = setTimeout(function(){
              func.apply(context, args)
          }, wait);
      }
  }
}

function fn(a) {
  console.log(a);
  console.log("time", Date.now());
}
var o = {
  a: 2,
  fn: debounce(fn, 500, true),
};

o.fn(1);

setTimeout(() => {
  o.fn(2);
}, 200);

setTimeout(() => {
  o.fn(3);
}, 400);

setTimeout(() => {
  o.fn(4);
}, 600);
