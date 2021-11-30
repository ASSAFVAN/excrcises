//1.
const arr = Array(100);
let myObject = {};
arr.fill(myObject);
console.log(arr);
//2.
let arr2 = Array.from(Array(101).keys()).slice(1);
console.log(arr2);
//3.

//4.

//5.
console.log(Array.isArray([]));
//6.
const arr6 = [1, 2, 3, 4, 5];
const arr6a = Array.from(arr6);
console.log(arr6);
console.log(arr6a);
//original is change when it has an object
const arr7 = [1, 2, { car: "Nissan" }, ["Toyota", "Subaru"]];
const arr7a = Array.from(arr7);
arr7a[2].car = "a";
console.log(arr7);
console.log(arr7a);
