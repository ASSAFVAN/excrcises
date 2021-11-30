// let num = 1234;
// let remain = 0;
// let arr = [];
// for (let i = 0; num != 0; i++) {
//   if (num % 2 === 0) {
//     arr.unshift(0);
//   } else {
//     arr.unshift(1);
//   }
//   num = Math.floor(num / 2);
//   // console.log("num", num);
//   // console.log("i", i);
// }

// console.log(arr);
// result = 0;
// for (j = 0; j < arr.length; j++) {
//   result = result + arr[j];
// }
// console.log(result);

var countBits = function (num) {
  let remain = 0;
  let arr = [];
  for (let i = 0; num != 0; i++) {
    if (num % 2 === 0) {
      arr.unshift(0);
    } else {
      arr.unshift(1);
    }
    num = Math.floor(num / 2);
  }
  result = 0;
  for (j = 0; j < arr.length; j++) {
    result = result + arr[j];
  }
  return result;
};
console.log(countBits(1234));
