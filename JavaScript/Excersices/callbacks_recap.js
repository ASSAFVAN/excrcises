function quotation(name,callback){
  if (typeof callback === "function){
    callback(name);
  }
}
function modified(name){
  
  
}


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