function flatten(arr, deep) {
  if (!Array.isArray(arr)) return arr;
  if (!deep) return [...arr];
  return arr.reduce((a, b) => {
    if (Array.isArray(b)) return [...a, ...flatten(b, deep)];
    return [...a, b];
  }, []);
}

console.log(flatten([1, 2, [3, 4, [5, 6]]], true));
