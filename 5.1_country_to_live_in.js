function countryToLiveIn(language, isIsland, population, country) {
  if (language === "English" && isIsland === false && population < 50000000) {
    console.log(`You should live in ${country}`);
  } else {
    console.log(`${country} does not meet you criteria`);
  }
}

countryToLiveIn("Hebrew", false, 9000000, "Israel");
