const arr = [1, 2, 3, 4, 5];
const arr2 = ["g", 2, "t", 4, 3];

//1.
function doubleValues(array) {
  return arr.map(function (num) {
    return num * 2;
  });
}
console.log(doubleValues(arr));

//2.
function onlyEvenValues(array) {
  const newArr = [];
  arr.forEach(function (num) {
    let even = num % 2 === 0;
    if (even === true) {
      newArr.push(num);
    }
  });
  return newArr;
}
console.log(onlyEvenValues(arr));

//3.

function showFirstAndLast(array) {
  const newArr = [];
  arr2.forEach(function (item, idx) {
    if (idx === 0 || idx === arr2.length - 1) {
      if (typeof item === "string") {
        newArr.push(item);
      }
    }
  });
  return newArr;
}
console.log(showFirstAndLast(arr2));

//4.
function vowelCount(str) {
  const obj = {};
  const vowel = ["a", "i", "o", "u", "e"];
  const arr = str.toLowerCase().split("");
  // for (i = 0; i < arr.length; i++) {
  //   for (j = 0; j < vowel.length; j++) {
  //     if (arr[i] === vowel[j]) {
  //       if (!obj[arr[i]]) {
  //         obj[arr[i]] = 1;
  //       } else {
  //         obj[arr[i]]++;
  //       }
  //     }
  //   }
  // }
  for (const letter of arr) {
    if (vowel.includes(letter)) {
      if (!obj[letter]) {
        obj[letter] = 1;
      } else {
        obj[letter]++;
      }
    }
  }
  return obj;
}

console.log(vowelCount("aAbcde"));
//5.
const str = "dfdsjfdhf";
function capitalize(string) {
  const arr = str.split("");
  let newArr = [];
  let newStr = "";
  arr.forEach(function (letter) {
    newArr.push(letter.toUpperCase());
    newStr = newArr.join("");
  });
  return newStr;
}
console.log(capitalize(str));

//6.
function shiftLetter(str) {
  let splitArr = str.split("");
  let arr = splitArr.map((letter) => {
    letter = letter.charCodeAt() + 1;
    letter = String.fromCharCode(letter);
    return letter;
  });
  return arr.join("");
}
console.log(shiftLetter("school"));

//7.
const str2 = "This is my bootcamp";
function swapCase(string) {
  const arr = str2.split(" ");
  let newArr = [];
  let newStr = "";
  console.log(arr);
  arr.forEach(function (word, idx) {
    if (idx % 2 !== 0) {
      newArr.push(word.toUpperCase());
    } else {
      newArr.push(word);
    }
    newStr = newArr.join(" ");
  });
  return newStr;
}
console.log(swapCase(str2));
