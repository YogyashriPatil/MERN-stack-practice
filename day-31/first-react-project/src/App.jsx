import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <b>
        hi there
      </b>
      <Counter></Counter>
    </div>
  )
}

function Counter(){
  const [count , setCount] = useState(0)
  
  setInterval(function(){
    setCount(count +1 )
  },1000)
  function IncreaseCount(){
    setCount(count+1)
  }

  function decreaseCount(){
    setCount(count-1)
  }

  function resetCount(){
    setCount(0)
  }

  //   function resetCount(){
  //   setCount(0)
  // }

  return <div>
    <h1 id='text'>{count}</h1>
    {/* <button onClick={IncreaseCount}>Increase Count </button>
    
    <button onClick={decreaseCount}>decrease Count </button>
    
    <button onClick={resetCount}>Reset Count </button> */}
  </div>
}
export default App
