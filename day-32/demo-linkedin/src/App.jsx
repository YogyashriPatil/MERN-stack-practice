import { useEffect, useState } from 'react'
import './App.css'
import React from "react";

function App() {
  const [currentTab, setcurrentTab] = useState("Feed");
  const [tabData, settabData] = useState({})
  const [loading , setloading] = useState(true)
  useEffect( function () {
    setloading(true)
    console.log("send req to backend to get data for tab " + currentTab)
    fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab)
      .then(async res=> {
        const json = await res.json();
        settabData(json)
        setloading(false)
      })
  },[currentTab])

  return <div>
      <button 
        onClick={()=> { setcurrentTab(1)}} 
        style={{ color:currentTab == 1 ? "red" : "black"}}>
          Todo #1
      </button>

      <button 
        onClick={()=> { setcurrentTab(2)}} 
        style={{ color:currentTab == 2 ? "red" : "black"}}>
          Todo #2
      </button>

      <button 
        onClick={()=> { setcurrentTab(3)}}
        style={{ color:currentTab == 3 ? "red" : "black"}}>
         Todo #3
      </button>

      <button 
        onClick={()=> { setcurrentTab(4)}} 
        style={{ color:currentTab == 4 ? "red" : "black"}}>
          Todo #4
      </button>

      {loading ? "loading ..." : tabData.title}
    </div>
}

export default App
