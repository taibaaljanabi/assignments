

let form = document.toDoList
let todolist = []
axios.get('https://api.vschool.io/Taiba/todo').then((response) => {
    todolist.push(...response.data)
  displayTodos(response.data)
 
console.log(response.data)

console.log(todolist)
})




function displayTodos(todos, updated){
    if(updated){
        document.getElementById('main').innerHTML = ""
    }


    todos.forEach((todo) => {

        let parentDiv = document.createElement('div')
        let titleH2 = document.createElement('h2')
        let discp = document.createElement("p")
        let pricp = document.createElement("p2")
        let image = document.createElement("img") 
        let deletebtn = document.createElement("button")
        let checkBox = document.createElement("input")
        
        
    
        titleH2.innerText = todo.title
        discp.innerText = todo.description
        pricp.innerText = todo.price
        image.src = todo.imgUrl
        deletebtn.innerText = 'Delete'



        deletebtn.addEventListener('click', function(){
            parentDiv.style.display = "none"
            axios.delete(`https://api.vschool.io/Taiba/todo/${todo._id}`)
        })

        checkBox.addEventListener('click', function(){
            checkTodo(todo)
            axios.get(`https://api.vschool.io/Taiba/todo`).then(res => {
                todolist = res.data
            })

        })
        if(todo.completed){
            checkBox.checked = true 
            parentDiv.style.textDecoration = 'line-through'
        }else{
            parentDiv.style.textDecoration = 'none'
        }
    
      
        parentDiv.setAttribute("class", "toDoList")
        checkBox.setAttribute("type", "checkBox")
        image.setAttribute("width", "60px")

        parentDiv.appendChild(titleH2)
        parentDiv.appendChild(discp)
        parentDiv.appendChild(pricp)
        parentDiv.appendChild(image)
        parentDiv.appendChild(deletebtn)
        parentDiv.appendChild(checkBox)


        document.getElementById('main').appendChild(parentDiv)  


       
            
      
        
    })
}
const checkTodo = oldTodo => {
    axios.put(`https://api.vschool.io/Taiba/todo/${oldTodo._id}`, {completed: !oldTodo.completed}).then(response => {
        const newList = todolist.map(todo => todo._id === oldTodo._id ? response.data : todo)
        // getTodo([oldTodo])
        displayTodos(newList,true) 

    })
}
   


    form.addEventListener("submit", function (event) {
        event.preventDefault()


        let title = form.title.value
        let description = form.description.value
        let price = form.price.value
        let imgUrl = form.image.value

        let newObject = {
            title,
            description,
            price,
            imgUrl
        }
        postToDos(newObject)
       
    
    })

    const postToDos = (newTodo) => {
        axios.post(`https://api.vschool.io/Taiba/todo`, newTodo).then ((response) => {
            todolist.push(Response.data)
   
    displayTodos([response.data])

    })

}