import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos,setTodos] = useState([{
    title:"Go to gym",
    description:"Hit the gym",
    done:false
  }])

  function addTodo(){
    let newarray=[]
    for(let i=0;i<todos.length;i++)
    {
      newarray.push(todos[i])
    }
    newarray.push({
      title:document.getElementById("title").value,
      description:document.getElementById("description").value,
      done:false
    })
    setTodos(newarray)
  }
  return (
    <div>
      <input id="title" type='text'></input>
      <input id="description" type='text'></input>
      <br />
      <br />
      <button onClick={addTodo}>Add Todo</button>

      <br />
      <br />
      {JSON.stringify(todos)}
    </div>
  )
}

export default App
