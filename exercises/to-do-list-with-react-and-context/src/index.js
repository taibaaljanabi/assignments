import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ToDoProvider from './ToDoProvider'


ReactDOM.render(

<ToDoProvider>
    <App/>
</ToDoProvider>
, document.getElementById('root'))