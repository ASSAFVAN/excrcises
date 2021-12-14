function countEveryDigit(num) {
  let arr = num.toString().split("");
  const arr1 = arr.map((x) => x * x);
  return Number(arr1.join(""));
}

console.log(countEveryDigit(3212));

function spinWords(str) {
  let arr = str.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      let reversed = arr[i].split("").reverse();
      let x = reversed.join("");
      newArr.push(x);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr.join(" ");
}
console.log(spinWords("Hey fellow warriors"));
