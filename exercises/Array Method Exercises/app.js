


const vegetables = ["carrot", "tomato", "pepper", "lettuce"];
const fruit = ["banana", "apple", "orange", "watermelon"];


// Remove the last item from the vegetable array.
 vegetables.pop()
 
// Remove the first item from the fruit array.
 fruit.shift()
// Find the index of "orange."
var indexOfOrange = fruit.indexOf("orange")
// Add that number to the end of the fruit array.
var newArr4 = fruit.push(indexOfOrange)
// Use the length property to find the length of the vegetable array.
var vegL = vegetables.length
// Add that number to the end of the vegetable array.
 vegetables.push(vegL)
// Put the two arrays together into one array. Fruit first. Call the new Array "food".
const food = fruit.concat(vegetables)
// Remove 2 elements from your new array starting at index 4 with one method.
var removing = food.splice(4,5,3 )
// Reverse your array.
var reversing = food.reverse()
// Turn the array into a string and return it.
var string = food.join(",")




// console.log("fruit :", fruit )
// console.log("vegetables", vegetables)
console.log(string)









// const vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// var editedArr = fruit.indexOf("orange")
// var newArr = fruit.push(editedArr)
// var arrLen = vegetables.length
// var editedArr = fruit.indexOf("orange")var editedArr = fruit.indexOf("orange")
// console.log(vegetables)
// console.log(newVeg)
// const food = []