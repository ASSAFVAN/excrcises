function percentageOfWorld1(population) {
  const worldPopulation = 7900;
  percentage = (population / worldPopulation) * 100;
  return `Your population percentage is: ${percentage}%`;
}
const firstCountry = percentageOfWorld1(500);
console.log(firstCountry);
const secondCountry = percentageOfWorld1(4000);
console.log(secondCountry);
const thirdCountry = percentageOfWorld1(2200);
console.log(thirdCountry);

const percentageOfWorld2 = (population) => {
  const worldPopulation = 7900;
  percentage = (population / worldPopulation) * 100;
  return `Your population percentage is: ${percentage}%`;
};
console.log(percentageOfWorld2(500));
console.log(percentageOfWorld2(4000));
console.log(percentageOfWorld2(200));
