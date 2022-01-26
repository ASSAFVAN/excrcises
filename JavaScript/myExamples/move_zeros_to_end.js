// const myArr = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

// const moveZeros = (arr) => {
//   let newArr = [];
//   let newArr2 = [];
//   arr.map((el) => {
//     el !== 0 ? newArr.push(el) : newArr2.push(el);
//   });
//   newArr2.map((el) => {
//     newArr.push(newArr2[el]);
//   });
//   return newArr;
// };

// console.log(moveZeros(myArr));

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 100);
}
