function allSettled(promises) {
  let result = [];
  let finished = 0;
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];
      promise
        .then(
          (value) => {
            result[i] = {
              status: "fulfilled",
              value,
            };
          },
          (reason) => {
            result[i] = {
              status: "rejected",
              reason,
            };
          }
        )
        .finally(() => {
          finished++;
          if (finished === promises.length) {
            resolve(result);
          }
        });
    }
  });
}

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promises = [promise1, promise2];

allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result))
);
