import { useState } from 'react'
import './App.css'

function App() {
  
  const [bulbOn, setbulbOn] = useState(true)
  return <div>
      <Light bulbOn={bulbOn} setbulbOn={setbulbOn} />
  </div>
}

function Light({bulbOn, setbulbOn}){
  return <div>
    <LightBulb bulbOn={bulbOn} />
    <LightSwitch bulbOn={bulbOn} setbulbOn={setbulbOn} />
  </div>
}

function LightBulb({bulbOn}){
  return <div>
    {bulbOn ? "Bulb on ": "Bulb off"}
  </div>
}

function LightSwitch({bulbOn,setbulbOn}){
  function toggle(){
    setbulbOn(!bulbOn)
  }
  return <div>
    <button onClick={toggle}>Toggle the Bulb </button>
  </div>
}
export default App
