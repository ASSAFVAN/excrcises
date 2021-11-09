const arr = ["boo", "doooo", "hoo", "ro"];

function lengthOfWords(arr) {
  let length = [];
  for (let i = 0; i < arr.length; i++) {
    length[i] = arr[i].length;
  }
  return length;
}

console.log(lengthOfWords(arr));
