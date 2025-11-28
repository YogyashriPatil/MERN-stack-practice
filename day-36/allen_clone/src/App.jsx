import { useRef, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] =useState(1)
  // const timer = useRef();
  // let timer = 0;
  function startClock(){
    timer = setInterval(function (){
      setCount(c => c+1)
    },1000)
  }

  function stopClock(){
    clearInterval(timer)
  }
  return <div>
      {count} <br />
      <button onClick={startClock}> Start </button>
      <button onClick={stopClock}> Stop </button>
    </div>
}
export default App
