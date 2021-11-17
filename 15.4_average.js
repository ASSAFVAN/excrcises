function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([85, 90, 92]));

// the sum variable has no value when it is declared.
//inside the loop the sum is undefind and undefind+ a number is NaN. that's why we need to assign a value 0 to sum before the loop.
//to get the avarage we need to divide the sum by the length of array.
