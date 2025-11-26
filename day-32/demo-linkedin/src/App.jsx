import { useEffect, useState } from 'react'
import './App.css'
import React from "react";

function App() {

  const [count, setcount] = useState(1)

  function increaseCount(){
    console.log("increase count called "+count)
    setcount(count+1)
  }
  useEffect(() => {
    console.log("above setinterval")
    setInterval(increaseCount, 1000);
  },[])
 
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
