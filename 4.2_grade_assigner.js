function gradeAssigner(num) {
  if (num < 0) {
    return "ERROR";
  } else if (num >= 0 && num < 65) {
    return "F";
  } else if (num >= 65 && num < 70) {
    return "D";
  } else if (num >= 70 && num < 80) {
    return "C";
  } else if (num >= 80 && num < 90) {
    return "B";
  } else if (num >= 90 && num < 101) {
    return "A";
  } else {
    return "ERROR";
  }
}
