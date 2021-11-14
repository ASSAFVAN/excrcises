const population = [100, 500, 200, 800];

function percentageOfWorld(population) {
  const worldPopulation = 7900;
  let percentage = ((population / worldPopulation) * 100).toFixed(2);
  return percentage;
}

function populationPercentages(population) {
  let percentages = [];
  i = 0;
  while (i < population.length) {
    percentages.push(percentageOfWorld(population[i]));
    i++;
  }
  return percentages;
}
console.log(populationPercentages(population));
