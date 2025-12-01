import { useEffect, useState } from 'react'
import './App.css'
import { useDebounce } from './hook/useDebounce'

function App() {
  const [inputVal, setinputVal] = useState("")
  const debouncedValue = useDebounce(inputVal)
  function change(e)
  {
    setinputVal(e.target.value)
  }

  useEffect(() => {
    console.log("expensive operation ")
  }, [inputVal])
  return (
    <div>
      <input type='text' id='input' onChange={change} ></input>
    </div>
  )
}

export default App
