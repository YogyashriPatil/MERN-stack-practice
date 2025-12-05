import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      <Test />
    </div>
  )
}
function Test(){
  return  <>
    {/* <div style={{display:'flex', justifyContent:'space-between'}}> */}
    {/* <div className='flex justify-between'> */}
    <div class='flex justify-between' >
      <div style={{background:'red'}}>
        Hi there 1
      </div>
      <div style={{background:'blue'}}>
        Hi there 2
      </div>
      <div style={{background:'green'}}>
        Hi there 2
      </div>
    </div>
  </>
}
export default App
