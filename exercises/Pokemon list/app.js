// const axios = require('axios')


axios.get('https://api.vschool.io/pokemon/').then((response) => {
response.data.objects[0].pokemon.forEach(poke => {
    document.getElementById('name').innerHTML += `<h1>${poke.name}<h1>`
})
}










// const xhr = new XMLHttpRequest()
// console.log(xhr)
// xhr.onreadystatechange = function(){
//     if (xhr.readyState === 4 && xhr.status === 200){
//         const jsonData = xhr.responseText
//         const data = JSON.parse(jsonData)

//     }

// }


// xhr.open('GET', 'https://api.vschool.io/pokemon',true)
// xhr.send()


// const XMLHttpRequest= require("xmlhttprequest").XMLHttpRequest
// const xhr = new XMLHttpRequest()
// console.log(xhr)
// xhr.onreadystatechange = function(){
// if (xhr.readyState === 4 && xhr.status === 200){
//             const jsonData = xhr.responseText
//             const data = JSON.parse(jsonData)
//             console.log(data)
//             let list = data.objects[0].pokemon
//             console.log(list)
//             for (let i = 0 ; i < list.length; i++ )
//             {
//                 let div = document.createElement('div')
//                 div.innerText = list[i].name
//                 let listHTML = document.getElementById('name')
//                 listHTML.appendChild(div)
//             }

//      }
// }

// xhr.open('GET', 'https://api.vschool.io/pokemon/' , true);
// xhr.send()