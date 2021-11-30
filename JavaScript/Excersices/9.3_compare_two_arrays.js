const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
const food2 = ["Fries", "Milk", "Pizza", "Cheese", "Hamburgers"];

function compareArrays(arr1, arr2) {
  let newArr = [];
  let counter = 0;
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArr.push(arr1[i]);
      } else {
        counter++;
      }
    }
  }
  if (counter === arr1.length * arr2.length) {
    return false;
  } else {
    return newArr;
  }
}

console.log(compareArrays(food, food1));
console.log(compareArrays(food, food2));
