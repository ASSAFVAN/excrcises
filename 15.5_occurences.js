function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));

//in line 5 we should write counter +=1 so the initial value of counter (0) is incremnted each time we find a match with letter n.
// while there is no incrementation, the value of counter is 0 from line 2.
