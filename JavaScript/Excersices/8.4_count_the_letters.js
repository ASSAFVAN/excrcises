const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function countLetters(arr) {
  const letterObject = {};
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
    for (let j of arr[i]) {
      if (letterObject[j]) {
        letterObject[j]++;
      } else {
        letterObject[j] = 1;
      }
    }
  }
  return letterObject;
}
console.log(countLetters(array));
