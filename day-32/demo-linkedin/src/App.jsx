import { useEffect, useState } from 'react'
import './App.css'
import React from "react";

function App() {

  const [count, setcount] = useState(10000000)

  function increaseCount(){
    console.log("increase count called "+count)
    setcount(
      function(currentValue){
        return currentValue + 1000000 ;
      }
    )
  }
  useEffect(() => {
    console.log("above setinterval")
    setInterval(increaseCount, 1000);
  },[])
 
  useEffect(()=> {
    console.log("the count has been updated to "+ count)
  }, [count])
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
