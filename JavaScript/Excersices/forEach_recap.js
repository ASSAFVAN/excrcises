const words = ["one", "two", "three", "four", "five"];

//1.basic loop

const wordsLog = words.forEach((item, idx) => console.log(item, idx));

//2. ToNumber
// function toNumber(arr){
//   arr.forEach(item,idx) => {
//     console.log();

//   }
// }

//3. Fruits

const fruits = ["mango", "papaya", "pineapple", "apple"];

const fruitsLogs = fruits.forEach((item) => {
  if (item === "apple") {
    console.log(`I am eating an ${item}`);
  } else {
    console.log(`I am eating a ${item}`);
  }
});

//4. Mutate the array

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.forEach;
