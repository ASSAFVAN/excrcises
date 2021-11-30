function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}
let result = describeCountry("Finland", "6 million", "Helsinki");
console.log(result);

let countryOne = describeCountry("Israel", "9 million", "Jerusalem");
console.log(countryOne);
let countryTwo = describeCountry("France", "30 million", "Paris");
console.log(countryTwo);
let countryThree = describeCountry("Italy", "35 million", "Rome");
console.log(countryThree);
