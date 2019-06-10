


// const readlineSync = require('readline-sync')
// const num1 = readlineSync.question(' Please enter your first number? ')
// const num2 = readlineSync.question(' Please enter your second number?')
// readlineSync.setDefaultOptions({
//     limit: ['add', 'sub', 'mul', 'div']
// })
// const operation = readlineSync.question('Please enter the operation?')
// let result = ''
// if (operation === "add") {
//     result = +num1 + +num2
// } else if (operation === "sub") {
//      result = +num1 - +num2
     
// } else if (operation === "mul") {
//      result = +num1 * +num2
// } else {
//     result = +num1 / +num2

// }
// console.log(`The result is ${result}`)
















const readlineSync = require('readline-sync');
const userName = readlineSync.question("What is your name ?")
console.log( "Hi"+ " " + userName +"!"+ "You are locked in a room :)")

options = [ "Put hand in hole", "Find the key", "Open the door"]
index = readlineSync.keyInSelect(options, "Select one of the options ?")
let gameOver = true
while (gameOver === false){
    if (index === "Open the door"){
        console.log("You can not"+ " " + index + " " +"unless you find the key first")
    }else if (index === "Put hand in hole"){
        console.log("You are dead")
        
    }else{
        console.log("ok, You are free")
    }

}

// while (gameOver === false){
    //get user inpupt

    //logic tree based on user choice

    //update appropriate gameOver status if necissary



//escape condition 