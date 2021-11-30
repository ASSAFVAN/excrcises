//block 1

//we'll get undefined and then we get 2.
// the variable "a" is declared in var after the log, so it is impossible to log it at the beginning.
//in order to fix it, we should move the var a = 1 to the beginning of the function.

//block 2

//the first log output will be "Aurelio De Rosa" because in the log we call the function 'getFullName' and then "this" is refering the closest name outside the function.
//the second log output "John Doe" since we don't call the function getFullName so it is undefined and then

//block 3
//the first log output undefined because the variable a declared with let  and it is not accessiable from outside the function.
//the second log output is a number because the b variable is a global variable since it wasnt declared with let/var/const.

//block 4
//calling the function is at the end and since it is the same name, it outputs 2 two times.

//block 5
//the first log output is 1 because there was no variable type declaration, so it became global and it can be logged.
//the second log output is undefined because there is a var declartion inside the function and var is limit to the function scope, so it doesnt available outside the function scope.

//block 6

//the first log output is undefined refering the log outside the function since it is logged before the var declartion.
//the second log output is 1 because we call the function and f is already get a value of 1.
