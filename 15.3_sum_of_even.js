function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//The problem is we sum all the item in the array from position 3 (arr[2)]) and when we get to the last one = arr[10] - it is not exists in the array, so it is NaN.
