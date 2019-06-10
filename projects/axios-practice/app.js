

let form = document.addTodo
let todoList = []
 
axios.get('https://api.vschool.io/Taiba/todo').then((response) => {
    todoList.push(...response.data)
    displayTodos(response.data)
})

function displayTodos(todos,updated){
    if (updated){
        document.getElementById('main').innerHTML = ''
    }
    todos.forEach((todo) => {
        let parentDiv = document.createElement('div')
        let titleh2 = document.createElement('h2')
        let descp = document.createElement('p')
        let imgUrl = document.createElement('img')
        let deleteBtn = document.createElement('button')
        let checkBox = document.createElement('input')


        parentDiv.setAttribute('class', 'todoBox')
        imgUrl.setAttribute('src', todo.imgUrl)
        checkBox.setAttribute('type', 'checkbox')

        titleh2.innerText = todo.title
        descp.innerText = todo.description
        deleteBtn.innerText = 'Delete'
        
        deleteBtn.addEventListener('click', function (){
            parentDiv.style.display = 'none'
            axios.delete(`https://api.vschool.io/Taiba/todo/${todo._id}`)
        })

        checkBox.addEventListener('click', function(){
            checkTodo(todo)
            axios.get('https:/api.vschool.io/Taiba/todo').then(res => {todoList = res.data})

        })
        if(todo.completed){
            checkBox.checked = true
            parentDiv.style.decoration = 'line-through'

        }else{
            parentDiv.style.textDecoration = 'none'
        }

        parentDiv.appendChild(titleh2)
        parentDiv.appendChild(descp)
        parentDiv.appendChild(imgUrl)
        parentDiv.appendChild(deleteBtn)
        parentDiv.appendChild(checkBox)
        document.getElementById('main').appendChild(parentDiv)

    })
}

const checkTodo = oldTodo =>{
    axios.put(`https://api.vschool.io/Taiba/todo/${oldTodoo._id}`, {completed: !oldTodo.completed}).then(response => {
        const newList = todoList.map(todo => todo._id === oldTodo._id ? response.data : todo)
         displayTodos(newlist,true)
  })
}
form.addEventListener('submit', function(event){
    event.preventDefault()
    let title = form.title.value
    let description = form.description.value
    let imgUrl = form.imgUrl.value

    let newObject = {
        title,
        description,
        imgUrl
    }
    postTodo(newObject)
    
})
const postTodo = (newTodo) =>{
    axios.post('https://api.vschool.io/Taiba/todo', newTodo).then((response)=> {
        todoList.push(response.data)
        displayTodos([response.data])
    })
} 
