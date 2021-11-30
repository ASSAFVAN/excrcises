const people = ["Greg", "Mary", "Devon", "James"];
//1.
// for (i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }
//2.
people.shift("Greg");
//3.
people.pop("James");
//4.
people.unshift("Matt");
//5.
people.push("Assaf");
//6.
// for (i = 0; i < people.length; i++) {
//   if (i === 2) {
//     break;
//   }
//   console.log(people[i]);
// }
//7.
const people2 = people.slice(2, 4);
//8.
console.log(people.indexOf("Mary"));
//9.
console.log(people.indexOf("Foo"));
//10.
people.unshift("Greg");
people.pop("Assaf");
people.splice(1, 1);
people.pop("Devon");
people.push("Elizabeth", "Artie", "James");
//11.
let withBob = people.concat(["Bob"]);
console.log(withBob);
