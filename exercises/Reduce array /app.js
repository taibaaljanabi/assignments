// 1) Turn an array of numbers into a total of all the numbers
// function total(arr) {
//  return arr.reduce((a, b) => a + b)
// }

// console.log(total([1,2,3]));




// function totalVotes(arr) {
// return  arr.filter(el => el.voted === true).length
// }
 
//  const voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters))


// 2) Turn an array of numbers into a long string of all those numbers.




// function stringConcat(arr) {
//   return arr.reduce((a,b) => {
//     return (a.toString() + b.toString()) 
//   }
// )}
// console.log(stringConcat([1,2,3])); 



// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once





// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// function shoppingSpree(arr) {
//   return arr.reduce((total, wish) => total + wish.price, 0)   
// }

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// console.log(shoppingSpree(wishlist)); // 227005


// function flatten(arr) {

//  return arr.reduce((total, array) => total + array.concat(" "),0)
//   // your code here    
// }

// var arrays = [
//    ["1", "2", "3"],
//    [true],
//    [4, 5, 6]
// ];

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
 return arr.reduce((total, voter) => {
   if voters.age < 25
 })
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
youth: 4,
midVotes: 3,
mids: 4,
oldVotes: 3,
olds: 4 
}
*/