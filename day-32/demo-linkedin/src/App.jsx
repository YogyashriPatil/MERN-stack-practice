import { useState } from 'react'
import './App.css'
import React from "react";

function App() {

  const [count, setcount] = useState(0)

  function increaseCount(){
    setcount(count+1)
  }

  setInterval(increaseCount, 1000)
  return <div>
      {count}
    </div>
}

function Greeting(props){
  return <div>
    hi there {props.name}
  </div>
}
export default App
