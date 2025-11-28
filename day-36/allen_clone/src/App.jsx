import { useRef, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] =useState(1)
  const [timer,settimer] = useState(0)
  // const timer = useRef();
  // let timer = 0;
  function startClock(){
    let value = setInterval(function (){
      setCount(c => c+1)
    },1000)
    settimer(value)
  }

  function stopClock(){
    console.log(timer)
    clearInterval(timer)
  }

  function reinitialize(){
    
  }
  return <div>
      {count} <br />
      <button onClick={startClock}> Start </button>
      <button onClick={stopClock}> Stop </button>
    </div>
}
export default App
