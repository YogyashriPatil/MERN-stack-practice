import { useState } from 'react'
import './App.css'
import React from "react";

function App() {

  const [count, setCount] = useState(1);

  function increaseCount(){
    setCount(count + 1)
  }

  return <div>
      <div style={{display:"flex"}}>
        <div style={{background:"red" , borderRadius:20, width:20, height:20, paddingLeft: 10, paddingTop:10}}>
          {count}
        </div>
      </div>
      <img style={{cursor:"pointer"}} src={"https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/bell-icon.png"} width={20} />
      <button onClick={increaseCount}>Increases the count</button>
    </div>
}

export default App
