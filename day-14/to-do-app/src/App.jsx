import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title:"Go to gym",
    description:"go to gym from 7-9",
    completed:false
  }, {
    title:"Study DSA",
    description:"Study DSA from 9-10",
    completed:true
  },
  {
    title:"Study DSA",
    description:"Study DSA from 9-10",
    completed:true
  }]);

  function addTodo() {
    setTodos([...todos, {
      title:"new todo",
      description:"desc of new todo"
    }])
  }

  return (
    <div>
      {/* <Todo title={todos[0].title} description={todos[0].description} />
      <Todo title={todos[1].title} description={todos[1].description} /> */}

      <button onClick={addTodo}>Add a random todo</button>

      {todos.map(function (todos) {
        return <Todo title={todos.title} description={todos.description} />
      })}
      {JSON.stringify(todos)}
    </div>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}
export default App
