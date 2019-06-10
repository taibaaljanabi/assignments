// function doubleNumbers(arr){
//  const arr2 =  arr.map((el) => el * 2)
  
//   }

//   console.log(arr2)

// // //   console.log(doubleNumbers([2, 5, 100]));
// function stringItUp(arr){
//     arr.tostring()
//   }
  
//   console.log(stringItUp([2, 5, 100])); 
// 2) Take an array of numbers and make them strings
// function stringItUp(arr){
//   return arr.map(arr => arr.toString())
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
// function capitalizeNames(arr){
//    return arr.map(str => str.toUpperCase())
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
// function namesOnly(arr){
//     return arr.map(arr => arr.name)
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
// function makeStrings(arr){
//    const newArr = []
//  return arr.map(arr => {
//     if ( arr.age >= 18){
//        newArr.push(arr.name + "can go to matrix") 
//     }else {
//      newArr.push (arr.name + " can't go to matrix")
//     }

// })} 



// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]



// 6) Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr){
 return arr.map(arr => arr.)
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]