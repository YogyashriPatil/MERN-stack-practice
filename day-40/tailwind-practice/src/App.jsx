import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      FLEX DISPLAY
      <br />
      <Test />

      GRID DISPLAY
      <br />
      <GridLayout />

      Responsive DISPLAY
      <br />
      <Responsive />
    </div>
  )
}

function Responsive(){
  return <>
    <div className='sm:bg-blue-300 bg-red-300'>
      hi there
    </div>
  </>
}
function GridLayout(){
    return  <>
    <div class='grid grid-cols-12' >
      <div className='bg-amber-500'>
        Hi there 1
      </div>
      <div className='bg-red-500 col-span-6'>
        Hi there 2
      </div>
      <div className='bg-green-500 col-span-2'>
        Hi there 2
      </div>
    </div>
  </>
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
