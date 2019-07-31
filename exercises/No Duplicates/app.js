// var name = "taiba amer  hussain hammadi al janabi"
// var newName = name.split("")
// var uniqueArr = [...new Set(newName)]
// var selectLetter = Math.floor(Math.random() * uniqueArr.length)
// var removeLetter = uniqueArr.splice(selectLetter, 1)
// function scramble (uniqueArr){
    
//     while (uniqueArr.length > 0) {
       
        
//     }
//    return uniqueArr 
// }





// console.log(scramble(uniqueArr))


// Given a string, remove any duplicate letters.



function find_unique_characters( string ){
    let unique='';
    for(let i=0; i<string.length; i++){
        if(unique.indexOf(string[i]) === -1){
            unique += string[i];
        }
    }
    return unique;
}
// console.log(find_unique_characters('Ttaiba'));



// Create a function that randomly removes a letter.

function removeLetter(string){
    const newStr = string.split('')
    let selectLetter = Math.floor(Math.random() * newStr.length)
    let removeLetter = newStr.splice(selectLetter, 1)
    let removeLetterStr = removeLetter.toString()
    return removeLetterStr
    
}
console.log(removeLetter('good morning world'))

