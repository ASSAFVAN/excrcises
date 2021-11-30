//1.
const printToN = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
};
// printToN(10);

//2.
const countX = (n, t) => {
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (i % t === 0) {
      count = ++count;
    }
  }
  return count;
};
console.log(countX(10, 2));

//3.
const countEven = (n) => {
  myArr = n.toString().split("");
  let counter = 0;
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] % 2 === 0) {
      counter++;
    }
  }
  return counter;
};
// console.log(countEven(1640));

// const countEvenOnRange = (n) =>{
//   for (i=112;i<n;i)
// }
// console.log(countEvenOnRange(333))

//5.
function printReverse() {
  let arr = [];
  for (i = 0; i < 101; i += 2) {
    arr.push(i);
  }
  arr.sort((a, b) => b - a);
  console.log(arr);
}
printReverse();

//7.
const countABC = (str) => {
  const obj = {};
  const abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const arr = str.toLowerCase().split("");
  for (const letter of arr) {
    if (abc.includes(letter)) {
      if (!obj[letter]) {
        obj[letter] = 1;
      } else {
        obj[letter]++;
      }
    }
  }
  return obj;
};
console.log(countABC("he goes to school"));

//8.
const toUpper = (str) => {
  let newStr = "";
  for (i = 0; i < str.length; i++) {
    capital = str.charCodeAt(i);
    if (capital > 96 && capital < 123) {
      newStr = newStr + String.fromCharCode(capital - 32);
    }
  }
  return newStr;
};
console.log(toUpper("hello"));

//15.

// countBigAndSmall = (str) => {
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "A" && str[i] <= "Z") {
//       if (str[i + 1] === str[i].toLowerCase()) counter++;
//     }
//   }
//   return counter;
// };

// console.log(countBigAndSmall("aAaBbbCm"));

countBigAndSmall = (str) => {
  let counter = 0;
  let arr = str.split("");
  const filterArr = arr.forEach((letter, index) => {
    if (letter >= "A" && letter <= "Z") {
      if (arr[index + 1] === arr[index].toLowerCase()) {
        counter++;
      }
    }
  });
  return counter;
};

console.log(countBigAndSmall("aAaBbbCm"));

// BeforeNumber = (num) => {
//   let counter = 0;
//   let arr = num.toString().split("");
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (parseInt(arr[i]) === parseInt(arr[i + 1]) + 1) {
//       counter++;
//     }
//   }
//   return counter;
// };
// console.log(BeforeNumber(987810));

// BeforeNumber = (num) => {
//   let counter = 0;
//   let arr = num.toString().split("");
//   for (let i = arr.length; i > 0; i--) {
//     if (parseInt(arr[i]) === parseInt(arr[i - 1]) - 1) {
//       counter++;
//     }
//   }
//   return counter;
// };
// console.log(BeforeNumber(987810));

BeforeNumber = (num) => {
  let counter = 0;
  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    // console.log(i % 10, Math.floor(i / 10) % 10);
    if (i % 10 === (Math.floor(i / 10) % 10) - 1) {
      counter++;
    }
  }
  return counter;
};
console.log(BeforeNumber(987810));
