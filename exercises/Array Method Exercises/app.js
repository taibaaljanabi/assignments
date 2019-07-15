

const fruit = ["banana", "apple", "orange", "watermelon"]
const vegetables = ["carrot", "tomato", "pepper", "lettuce"]
//Remove the last item from the vegetable array.
vegetables.pop()

// Remove the first item from the fruit array.
fruit.shift()

//Find the index of "orange."
let indexofOrange = fruit.indexOf('orange')

//Add that number to the end of the fruit array.
fruit.push(indexofOrange)

//Use the length property to find the length of the vegetable array.
let lengthOfVeg = vegetables.length

//Add that number to the end of the vegetable array.
vegetables.push(lengthOfVeg)

//Put the two arrays together into one array. Fruit first. Call the new Array "food".

let food = fruit.concat(vegetables)

//Remove 2 elements from your new array starting at index 4 with one method.

let removed = food.splice(4, 2)

//Reverse your array.

let reversedArray = food.reverse()



//Turn the array into a string and return it.
function arrayToString(arr){
    return arr.toString()
}








console.log("fruit: ", fruit)
console.log("vegetables: ", vegetables)
console.log(indexofOrange)
console.log(lengthOfVeg)
console.log(food)
console.log('removed:', removed)
console.log(reversedArray)
console.log(arrayToString(food))

