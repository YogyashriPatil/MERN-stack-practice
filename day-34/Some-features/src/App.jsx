import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    return <div>
      <Mycomponent />
      <Mycomponent />
    </div>
}
const componentStyle= {
  backgroundColor: 'red',
  color:'white',
  padding: 10,
  borderRadius: '10px'
}
function Mycomponent()
{
  return <div style={componentStyle}>
    hi there
  </div>
}
export default App
