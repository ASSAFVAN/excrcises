//1.
function isString(str, callback) {
  if (typeof str === "string") {
    callback(str);
  }
}
function logStr(str) {
  console.log(str);
}
isString("AAA", logStr);
isString(123, logStr);

//2.
function firstWorldUpperCase(str, callback) {
  callback(str.charAt(0).toUpperCase() + str.slice(1));
}
function dashedStr(str) {
  str.replaceAll(" ", "-");
}

firstWorldUpperCase("aaaa aaaggg rrrrr", dashedStr);
