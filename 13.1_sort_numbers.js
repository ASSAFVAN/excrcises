const numbers = [1, -5, 666, 2, 400, 11];

//desc to asc
const descToAsc = numbers.sort((a, b) => a - b);

console.log(descToAsc);

//asc to desc
const ascToDesc = numbers.sort((a, b) => b - a);

console.log(descToAsc);
