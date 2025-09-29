import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {

  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/todos")
  //     .then(function(response) {
  //       setTodos(response.data.todos)
  //     })
  // },[])

  return (
    <>
      <GettodoId id={1} />
        {/* {todos.map(todo => <Todo title={title} description={description} />)} */}
    </>
  )
}

function GettodoId({id})
{
  const [todo, setTodos] = useState(0);

  useEffect(() => {
     axios.get("https://sum-server.100xdevs.com/todos")
      .then(function(response) {
       setTodos(response.data.todos)
    })
  })
  //your effect here
  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {description}
    </h4>
    {/* <input type='number' placeholder='enter the todo id ' /> */}
  </div>
}
function Todo({title,description})
{
  return <div>
    <h1> {title} </h1>
    <h3> {description} </h3>
  </div>
}

export default App
