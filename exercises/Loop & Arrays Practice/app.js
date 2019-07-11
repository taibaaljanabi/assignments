// 1/


// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// for (i = 0 ; i <= officeItems.length; i++){
//   let k = 0
//   if (officeItems[i] === 'computer'){
//     sum = k + 1
//     console.log(sum)
//   }
 

// }

// 2/
var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
] 
for (i = 0; i <= peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
  if(peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18){
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + '' + ' is Old Enough to see mad max')
  }else{
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +''+  ' is Not Old enough to see mad Max')
  }
}