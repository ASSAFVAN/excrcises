//2.1 string to number
const numbers = ["2", "5", "100"];
const stringToNumbers = numbers.map(function (item) {
  item = parseInt(item);
  return item;
});
console.log(stringToNumbers);

//2.2 string to float
let arr2 = [];
const floatNumbers = ["2.5", "5.9", "100.33"];
const stringToFloats = floatNumbers.map(function (item, i) {
  arr2[i] = Number(item);
  return arr2;
});
console.log(arr2);

//2.3 array of names
