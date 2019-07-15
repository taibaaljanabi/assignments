// Make a function that will return any given string into all caps followed by the same string all lowercase.

// function capilizeAndLowercase(str){
//     str1 = str.toUpperCase(str)
//     str2 = str.toLowerCase(str)
//     return (str1 + str2)
// }
// console.log(capilizeAndLowercase('hello'))

// Make a function that uses slice() and the other functions you've written to return the first half of the string
// function slice(str){
//     return (str.slice(0, str.length /2))
// }
// console.log(slice('Howareyoudoing'))


// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)
// function capilizeAndLowercase(str){
//     return (toUpperCase(slice(str.length/2 )+  )

// }

//optional 

// function captilizeAfterSpace(newStr) {
//     // newStr = newStr.toLowerCase()
//     newStr = newStr.split(' ')
//     for (i = 0; i < newStr.length; i++) {

//         newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1)
//     }
//     return newStr.join(' ')

// }


// console.log(captilizeAfterSpace('hello world'))


// --------------------------------------

// make string into array of words

// loop through each word 
    // inside the loop
        //concatenate a capital letter to the rest of the word
// make array of words to string


// }

// console.log(captilizeAfterSpace('hello world'))
















function findMiddleIndex(str){

    for (i = 0; i <= str.length; i ++){
        return Math.floor(str.length % 2)
    }
}

       console.log(findMiddleIndex('hello world'))
// }
// function findMiddleIndex(str){
//     let half = str.length % 2 
//     return (Math.floor(half))
// }

// console.log(findMiddleIndex('hello '))

// Make a function that uses slice() and the other functions you've written to return the first half of the string

// function returnFirstHalf(str){
//     let halfStr = str.length % 2
//    let newStr = str.slice(halfStr)
//     return newStr
// }
// console.log(returnFirstHalf('Elizabeth'))

// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)

// function capilizeAndLowercase(str){
//     let str1 = str.length % 2
// }