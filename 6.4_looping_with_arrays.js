const population = [100, 500, 200, 800];

function percentageOfWorld(population) {
  const worldPopulation = 7900;
  let percentage = ((population / worldPopulation) * 100).toFixed(2);
  return percentage;
}

function populationPercentages(population) {
  let percentages = [];
  for (i = 0; i < population.length; i++) {
    percentages.push(percentageOfWorld(population[i]));
  }
  return percentages;
}

console.log(populationPercentages(population));
