const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

//1.
function returnNames(arr) {
  return arr.map(function (names) {
    return names.name;
  });
}
console.log(returnNames(data));

//2.
function olderObjects(arr) {
  const newArr = [];
  arr.forEach(function (old) {
    let year = old.birthday.slice(-4);
    if (year < 1990) {
      newArr.push(old);
    }
  });
  return newArr;
}
console.log(olderObjects(data));

//3.
console.log(data.favoriteFoods);

function numOfFoods(arr) {
  const obj = {};
  arr.forEach(function (food) {
    food.favoriteFoods.meats.forEach(function (meatsFood) {
      if (obj[meatsFood]) {
        obj[meatsFood] += 1;
      } else {
        obj[meatsFood] = 1;
      }
    });
  });
  arr.forEach(function (food) {
    food.favoriteFoods.fish.forEach(function (fishFood) {
      if (obj[fishFood]) {
        obj[fishFood] += 1;
      } else {
        obj[fishFood] = 1;
      }
    });
  });

  return obj;
}
console.log(numOfFoods(data));
