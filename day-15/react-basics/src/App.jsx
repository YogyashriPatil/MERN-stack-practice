import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("My name is harkirat")
  function updateTitle(){
    setTitle("My name is " + Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Update the title </button>
      <Header title={title}></Header>
      <Header title="Yogyashri2"></Header>
    </div>
  )
}

function Header({title}){
    return <div>
      {title}
    </div>
}

export default App
