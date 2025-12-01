import { useState } from 'react'
import './App.css'
import { useDebounce } from './hook/useDebounce'

function App() {

  function sendDataToBackend(){
    fetch("api.amazon.com/search/")
  }

  const debouncedFn = useDebounce(sendDataToBackend)
  return (
    <div>
      <input type='text' onChange={debouncedFn} ></input>
    </div>
  )
}

export default App
