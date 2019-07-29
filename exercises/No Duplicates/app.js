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

function find_unique_characters( string ){
    let unique='';
    for(let i=0; i<string.length; i++){
        if(unique.indexOf(string[i]) === -1){
            unique += string[i];
        }
    }
    return unique;
}
console.log(find_unique_characters('Taiba'));
