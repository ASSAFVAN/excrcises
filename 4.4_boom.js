function boom(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 7 == 0 && String(i).includes(7)) {
      arr.push("BOOM-BOOM");
    } else if (i % 7 == 0) {
      arr.push("BOOM");
    } else {
      arr.push(i);
    }
  }
  console.log(arr.join(","));
}
