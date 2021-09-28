function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const el = arr[i];
    let j = i - 1
    for (; j >= 0; j--) {
      const temp = arr[j];
      if (temp > el) {
        arr[j + 1] = temp;
      } else {
        break;
      }
    }
    arr[j + 1] = el;
  }
  return arr
}

console.log(insertSort([5, 4, 3, 2, 1]));
