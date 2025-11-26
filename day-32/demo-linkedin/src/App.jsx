import { useEffect, useState } from 'react'
import './App.css'
import React from "react";

function App() {
  const [currentTab, setcurrentTab] = useState("Feed");

  useEffect( function () {
    console.log("send req to backend to get data for tab " + currentTab)
  },[currentTab])

  return <div>
      <button 
        onClick={()=> { setcurrentTab("Feed")}} 
        style={{ color:currentTab == "Feed" ? "red" : "black"}}>
          Feed
      </button>

      <button 
        onClick={()=> { setcurrentTab("Notification")}} 
        style={{ color:currentTab == "Notification" ? "red" : "black"}}>
          Notification
      </button>

      <button 
        onClick={()=> { setcurrentTab("messages")}}
        style={{ color:currentTab == "messages" ? "red" : "black"}}>
          messages
      </button>

      <button 
        onClick={()=> { setcurrentTab("Jobs")}} 
        style={{ color:currentTab == "Jobs" ? "red" : "black"}}>
          Jobs
      </button>
    </div>
}

export default App
