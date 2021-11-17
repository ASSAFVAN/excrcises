const arr = [3, 5, 7, 9, 11];

//max
const maxValue = arr.reduce((max, currentValue) => {
  if (max > currentValue) return max;
  return currentValue;
});
console.log(maxValue);

const arr2 = [1, 5, 7, 11, 3];

//sum of even numbers
const sumEven = arr2.reduce((total, currentValue) => {
  if ((total + currentValue) % 2 === 0) return total + currentValue;
  return total;
}, 0);
console.log(sumEven);

//average
const arr3 = [22, 5, 7, 11, 10];

const avgNums = arr3.reduce((sum, currentValue) => {
  if (currentValue == arr3[arr3.length - 1]) {
    sum += currentValue;
    return sum / arr3.length;
  }
  return (sum += currentValue);
});
console.log(avgNums);
