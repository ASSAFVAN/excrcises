function darkOrLight(color) {
  switch (String(color).toLowerCase()) {
    case "yellow":
    case "orange":
    case "pink":
      return "light color";
      break;
    case "blue":
    case "purple":
    case "brown":
      return "dark color";
      break;
    default:
      return "Unknown color";
  }
}
