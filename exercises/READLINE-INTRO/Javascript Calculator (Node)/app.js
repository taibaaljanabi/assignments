// A function that adds two numbers and returns the result
// A function that multiplies two numbers and returns the result
// A function that divides two numbers and returns the result
// A function that subtracts two numbers and returns the result
// Each function will have 2 parameters, num1, num2
// On the console the prompt will print to the user:
// Please enter your first number (store that number)
// Please enter your second number (store that number)
// Please enter the operation to perform: add, sub, mul, div (then store the operation)
// Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
// You will then print to the console: The result is: [the result]

const readlineSync = require('readline-sync')
const num1 = readlineSync.question(' Please enter your first number? ')
const num2 = readlineSync.question(' Please enter your second number?')
readlineSync.setDefaultOptions({
    limit: ['add', 'sub', 'mul', 'div']
})
const operation = readlineSync.question('Please enter the operation?')
let result = ''
if (operation === "add") {
    result = +num1 + +num2
} else if (operation === "sub") {
     result = +num1 - +num2
     
} else if (operation === "mul") {
     result = +num1 * +num2
} else {
    result = +num1 / +num2

}
console.log(`The result is ${result}`)