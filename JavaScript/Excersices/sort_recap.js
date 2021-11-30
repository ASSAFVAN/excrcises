const numbers = [1, 100, 67, -5, 6784, 356, 200];

const ascNumbers = numbers.sort();
console.log(ascNumbers);

const dscNumbers = numbers.sort((a, b) => {
  return b - a;
});

console.log(dscNumbers);
