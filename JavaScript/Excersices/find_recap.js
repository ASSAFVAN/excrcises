const numbers = [1, 100, 67, -5, 6784, 356, 200];
function greaterThan(arr, num) {
  return arr.find((n) => {
    return n > num;
  });
}
console.log(greaterThan(numbers, 60)); //return the first elemnet in the array that is greater than 60 => 100 in position 2

//same result using arrow function:
//1. remove "function"
//2. set to a variable
//3. add = after the name of the function
//4. add => after the arguments
const greaterThan2 = (arr, num) => {
  return arr.find((n) => {
    return n > num;
  });
};
console.log(greaterThan2(numbers, 60));

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const findFruitName = (arr, fruitName) => {
  return arr.find((fruit) => {
    return fruit.name === fruitName;
  });
};
console.log(findFruitName(inventory, "bananas"));
