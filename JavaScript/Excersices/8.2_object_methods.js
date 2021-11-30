const myCountry = {
  country: "Israel",
  capital: "Jerusalem",
  language: "Hebrew",
  population: "9 million",
  neighbours: ["Lebanon", "Syria", "Jordan", "Egypt"],
  describe() {
    console.log(
      `${this.country} has ${this.population} people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland() {
    myCountry.isIsland = this.neighbours.length === 0 ? true : false;
  },
};
myCountry.checkIsland();
console.log(myCountry);

myCountry.describe();
