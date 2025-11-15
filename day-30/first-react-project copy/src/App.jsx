import { use, useEffect, useState } from 'react'

import './App.css'

function App() 
{
  const [count,setCount] = useState(0)
  const [count2,setCount2] = useState(0)
  function increase(){
    setCount(c => c+1)
  }
  function decrease(){
    setCount(c => c-1)
  }

  return (
    <div>
        <Counter count={count} count2={count2} />
        <button onClick={increase}> Increase count </button>
        <button onClick={decrease}> decrease count </button>
        after counter
    </div>
  )
}

function Counter (props)
{

  useEffect(function() {
    console.log("mount");

    return function(){
      console.log("unmount")
    }
  }, []) //empty os it's run once

  //waiting for the changing the count
  useEffect(function() {
    console.log("count has changed")

    return function(){
      console.log("cleanup inside second effect")
    }
  }, [props.count])
  return <div>
      Counter1 {props.count} 
      <br /> <br />
      Counter2 {props.count2}

    </div>
}

export default App
