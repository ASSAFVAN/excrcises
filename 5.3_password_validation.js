//if else
function passwordValidation(password) {
  if (String(password).length > 7) {
    return "Strong";
  } else {
    return "Weak";
  }
}

//ternary
function passwordValidation1(password1) {
  String(password1).length > 7 ? console.log("Strong") : console.log("Weak");
}

// &&
function passwordValidation2(password2) {
  let str = String(password2);
  if (str.length > 0 && str.length < 7) {
    return "Strong";
  } else {
    return "Weak";
  }
}

//advanced function
function passwordValidation3(password3) {
  let str = String(password3);
  let capital = str.toLowerCase();
  let isCapital = false;
  if (str !== capital) {
    isCapital = true;
  }
  if (str.length > 7 && isCapital === true) {
    return "Very Strong";
  }
  if (str.length > 7 && isCapital === false) {
    return "Strong";
  } else {
    return "Weak";
  }
}
