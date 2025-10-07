import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 

function App() {
  const [todo, settodo] = useState({})


  
  return (
      <div>
          <input placeholder='enter the id : ' />
          <h1> 
            {todo.title}
          </h1>
          <h4>
            {todo.description}
          </h4>

      </div>    
  )
}

export default App
