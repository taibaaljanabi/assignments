//Write a for loop that prints to the console the numbers 0 through 9.
// for( i = 0; i <= 9 ; i++){
//     console.log(i)
// }







//Write a for loop that prints to the console 9 through 0.
// for( i = 9; i >= 0 ; i--){
//     console.log(i)
// }
//Write a for loop that prints these fruits to the console.
//var fruit = ["banana", "orange", "apple", "kiwi"]

// let fruit = ['banana', 'orange', 'apple', 'kiwi']

// for(i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }

//Bronze Medal
// Write a for loop that will push the numbers 0 through 9 to an array.

// let arr = []
// for (i = 0; i <= 9; i++){
//   arr.push(i)
// }
// console.log(arr)
// Write a for loop that prints to the console only even numbers 0 through 100.
// for (i = 0; i <= 100; i++){
//     if (i % 2 === 0 ){
//         console.log('even')
//     }else{
//         console.log('odd')
//     }
// }

// Write a for loop that will push every other fruit to an array.


// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

//Silver Medal
// Write a loop that will print out all the names of the people of the people array
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

//   for(i = 0; i <= peopleArray.length; i++){
//       console.log(peopleArray[i].name)
//   }
  

// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
let names = []
let occupations = []
for (i = 0; i <= peopleArray.length; i++){
    names.push(peopleArray[1].name)
    occupations.push(peopleArray[i].occupation)
}
console.log(names)
console.log(occupations)


// Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".

