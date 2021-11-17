const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

//desc to asc
const descToAsc = foods.sort();

console.log(descToAsc);

//asc to desc
const ascToDesc = foods.sort().reverse();

console.log(ascToDesc);

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

//desc to asc
const descToAscUC = foodsWithUpperCase.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a === b) return 0;
  return a < b ? -1 : 1;
});

console.log(descToAscUC);

//asc to desc
const ascToDescUC = foodsWithUpperCase.sort((b, a) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a === b) return 0;
  return a < b ? -1 : 1;
});

console.log(ascToDescUC);

//longest word
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const longToShort = words.sort((b, a) => {
  return a.length - b.length;
});

console.log(longToShort);
