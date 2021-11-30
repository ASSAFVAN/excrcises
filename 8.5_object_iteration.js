const myObject = { firstName: "Assaf", lastName: "Vanunu" };

function swapping(obj) {
  const swappedObject = {};
  for (let key in myObject) {
    swappedObject[myObject[key]] = key;
  }
  return swappedObject;
}

console.log(swapping(myObject));
