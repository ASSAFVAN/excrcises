// function howMuchILoveYou(nbPetals) {
//   let expressions = [
//     "I love you",
//     "a little",
//     "a lot",
//     "passionately",
//     "madly",
//     "not at all",
//   ];
//   for (let i = 0; i < nbPetals; i++) {
//     expressions.push(expressions[i]);
//     console.log(expressions);
//   }
//   return expressions[nbPetals - 1];
// }

// console.log(howMuchILoveYou(390));

function getDivisorsCnt(n) {
  let counter = 0;
  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      counter++;
    }
  }
  return counter;
}
console.log(getDivisorsCnt(54));
