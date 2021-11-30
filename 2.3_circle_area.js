function circleArea(radius) {
  return radius * 2 * Math.PI;
}
let area = circleArea(5);
console.log(area);
let roundedArea = Math.round(area * 100) / 100;
console.log(roundedArea);
