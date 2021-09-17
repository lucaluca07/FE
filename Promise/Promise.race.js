/**
 * Promise.race(iterable) 方法返回一个 promise
 * 一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。
 *
 * @param {array} promises
 */
function PromiseRace(promises) {
  return new Promise((resolve, reject) => {
    let len = promises.length;
    for (let i = 0; i < len; i++) {
      const p = promises[i];
      Promise.resolve(p)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    }
  });
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(reject, 90, "11");
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

PromiseRace([promise1, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => console.log(err));
