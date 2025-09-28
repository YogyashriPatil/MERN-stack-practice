import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(function(response) {
        setTodos(response.data.todos)
      })
  })

  return (
    <>
        {todos.map(todo => <Todo title={title} description={description} />)}
    </>
  )
}

function Todo({title,description})
{
  return <div>
    <h1> {title} </h1>
  </div>
}

export default App
