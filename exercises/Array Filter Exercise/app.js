// function fiveAndGreaterOnly(arr) {
//  const newArr = arr.filter(arr => arr > 5)
//    return newArr}
 
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2]))



// function evensOnly(arr) {
//    const newArr = arr.filter(arr => arr % 2 === 0)
//    return newArr
//   }
//   // test
//   console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
// function fiveCharactersOrFewerOnly(arr) {
//    const newArr = arr.filter(arr => arr.length <= 5 )
//    return newArr
//  }
//  // test
//  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]


// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
// function peopleWhoBelongToTheIlluminati(arr){
//  return arr.filter(arr => arr.member === false)
// }
// test
// console.log(peopleWhoBelongToTheIlluminati([
//     {
//         name: "Angelina Jolie",
//         member: true
//     },
//     {
//         name: "Eric Jones",
//         member: false
//     },
//     {
//         name: "Paris Hilton",
//         member: true
//     },
//     {
//         name: "Kayne West",
//         member: false
//     },
//     {
//         name: "Bob Ziroll",
//         member: true
//     }
// ]));
// 5) Filter out all the people who are not old enough to see The Matrix (younger than 18)
// function ofAge(arr){
//  return arr.filter(arr => arr.age < 18)
// }
// // test
// console.log(ofAge([
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