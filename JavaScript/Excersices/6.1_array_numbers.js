const arr = [1, 7, 3, 0, -5, 7, 3, 9];

//print all the numbers with for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//return the array length
function arrayLength(arr) {
  const arrLength = arr.push() + 1;
  return arrLength;
}
console.log(arrayLength(arr));

//sum of all elements in the array
function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(arraySum(arr));

//multiplication of the elements in the array
function arrayMulti(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result = result * arr[i];
  }
  return result;
}
console.log(arrayMulti(arr));
