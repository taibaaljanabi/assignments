const readlineSync = require('readline-sync')

// console.log(readlineSync)
// let answer = console.log(readlineSync.keyInYN("Do You Like Dolma?"))
// let crazy;
// if (answer){
//     crazy =  readlineSync.keyInYN("Meat or Veggi?")
// }else{
//     console.log("sorry")
// }
const states = ['Cali', 'Oregon', 'Hawaii', 'Florida']

let gameOver = false
 while (!gameOver){
    let index = readlineSync.keyInSelect(states,'Which state should we sell to canda?')
    if (state[index] !== 'Florida'){
        console.log('Wrong answer, guess again')

    }else{
        gameOver = true
        console.log('Good idea!')
    }
    
 }

