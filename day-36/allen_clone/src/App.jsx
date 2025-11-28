import { useRef, useState } from 'react'
import './App.css'

function App() {

  const inputRef = useRef();

  function inputHandle(){
    inputRef.current.Focus()
  }

  return <div>
      Sign Up <br />
        <input ref={inputRef} type={"text"}></input> <br />
        <input type={"text"}></input> <br />
        <button onClick={inputHandle}>Submit</button>
      </div>
}
export default App
