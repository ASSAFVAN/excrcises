const square = function (x) {
  return x * x;
};

const square = (x) => {
  return x * x;
};

const isEven = (num) => {
  return num % 2 === 0;
};
//same as above, but without ()
const isEven2 = (num2) => {
  return num2 % 2 === 0;
};

const multiply = (x, y) => {
  return x * y;
};

//another way to write arrow function without the "return" word
const square2 = (n) => n * n;

//3 different ways that give the same result
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const doubles1 = nums.map(function (z) {
  return z * 2;
});
const doubles2 = nums.map((z) => {
  return z * 2;
});
const doubles3 = nums.map((n) => z * 2);
