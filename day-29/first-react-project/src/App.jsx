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
      title:"eat food",
      description:"eat food",
      done:true
    })
    setTodos(newarray)
  }
  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {JSON.stringify(todos)}
    </div>
  )
}

export default App
