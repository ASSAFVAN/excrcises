const numbers = [1, 100, 67, -5, 6784, 356, 200];

//3.1 greater than

function greaterThan(arr, n) {
  return arr.filter(function (num) {
    if (num > n) {
      return num;
    }
  });
}
console.log(greaterThan(numbers, 199));

//3.2 greater than and less than

function greaterThan(arr, number1, number2) {
  return arr.filter(function (num) {
    if (num > number1 && num < number2) {
      return num;
    }
  });
}
console.log(greaterThan(numbers, 1, 200));

//3.3 filter rating
