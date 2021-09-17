const throttle = (fn, delay = 0) => {
  let timer = null;
  return (...rest) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...rest);
      timer = null;
    }, delay);
  };
};

const fn = () => {
  console.log("time", Date.now());
};

const fn1 = throttle(fn, 1000);

fn1();
fn1();

setTimeout(() => {
  fn1();
}, 200);

setTimeout(() => {
  fn1();
}, 2000);
