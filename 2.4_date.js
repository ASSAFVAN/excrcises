function currentDate() {
  let strDate = new Date();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wendsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  strDate = `Today is ${days[strDate.getDay()]} the ${strDate.getMonth()} of ${
    months[strDate.getMonth()]
  }, ${strDate.getFullYear()}`;
  return strDate;
}

console.log(currentDate());
