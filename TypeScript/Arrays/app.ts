function maxValue(arr: number[]) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

maxValue([10, 40, 50, 20, 400, 40, 30, 20, 600, 50, 1800]);
