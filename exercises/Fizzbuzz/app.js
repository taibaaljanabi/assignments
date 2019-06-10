// Write a function that returns an array containing the numbers 1 through 100 with the following stipulations:




function fizzBuzz(){
    const numbersOf = []
// var fizz = 0
// var fizzBuzz = 0
// var buzz = 0 
// loop from 0 to n
// we can do it in another way by checking if its divided by(15)
    for ( let i = 0; i < 100; i++ ){
        if (i % 3 === 0 & i % 5 === 0 ){
            numbersOf.push("FizzBuzz")

            // console.log(i, "FizzBuzz")
            
        }
        else if (i % 5 === 0){
            numbersOf.push("Buzz")
            // console.log(i,"Buzz")
        }
        else if ( i % 3 === 0 ){
            numbersOf.push("Fizz")
            // console.log(i,"Fizz")
        }
        else{
            // console.log(fizzBuzz())
            numbersOf.push(i)
        }
        
        

    }
    return numbersOf
}
console.log(fizzBuzz())




// If the number is divisible by 3, it should be replaced by "fizz".




// If the number is divisible by 5, replace it with "buzz".





// If the number is divisible by both 3 and 5, replace it with "fizzbuzz".