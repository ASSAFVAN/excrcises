function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (c > a > b) {
    return b;
  } else {
    return a;
  }
}
console.log(findSmallest(52, 66, 2));

//1. in line 10, the function missing the l letter,
