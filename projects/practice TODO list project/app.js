

// axios.get('https://jsonplaceholder.typicode.com/users').then((response)=> {
//     // console.log(response.data)
//     for( let user of response.data){
//         let div = document.createElement('div')
//         let username = document.createElement('h1')
//         let name = document.createElement('h2')
      
//        username.innerText = user.username
//        name.innerText= user.name
      
      
//            parentDiv= div.appendChild(name)
//            parentDiv= div.appendChild(username)
        



//         // div.innerHTML = <h2>${user.name}</h2>
           
     
       
      
//       document.getElementById("main").appendChild(parentDiv)
//     }

// })
// .catch((err)=> {
//     console.error(err)
// })
// const axios = require('axios')

axios.get('https:/jsonplaceholder.typicode.com/todos').then ((response) => {
    for (let todo of response.data){
        console.log(todo.completed ? 'd' : 'N' + '/t' + todo.title)
    }

})
.catch( console.error)