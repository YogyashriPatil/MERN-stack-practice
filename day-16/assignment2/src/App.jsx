import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setinputValue] = useState(0)

  let co=0;

  for(let i=1;i<inputValue ; i++)
  {
    co=co+i;
  }

  return (
    <div>
        <input onChange={function(e) {
          setinputValue(e.target.value);
        }} placeholder={'find sum from 1 to n'}></input>
        <br/>
        <br/>
        Sum from 1 to {inputValue} is {co}
        <br/>
        <button onClick={() => setCount((count) => count + 1)}>
          counter {count}
        </button>
        
    </div>
  )
}

export default App
