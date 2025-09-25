import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={updateTitle}>Update the title </button>
      <Header title="Yogyashri1"></Header>
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
