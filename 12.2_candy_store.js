const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

//1.

function getCandy(arr, id) {
  return arr.find(function (candyInfo) {
    return candyInfo.id === id;
  });
}
console.log(getCandy(candyStore.candies, "5hd7y"));

//2.

function getPrice(arr, id) {
  return arr.find(function (candyInfo) {
    return candyInfo.id === id;
  }).price;
}
console.log(getPrice(candyStore.candies, "5hd7y"));

//3.

function addCandy(name, id, price, amount = 1) {
  candyStore.candies.push({
    name: name,
    id: id,
    price: price,
    amount: amount,
  });
}
addCandy("mars", "1ab1c", 6);
console.log(candyStore.candies);

//4.

function buy(arr, id) {
  const myCandy = getCandy(arr, id);
  myCandy.amount--;
  candyStore.cashRegister += myCandy.price;
}
buy(candyStore.candies, "5hd7y");
console.log(candyStore);
