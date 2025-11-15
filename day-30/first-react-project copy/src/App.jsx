import { useEffect, useState } from 'react'

import './App.css'

function App() 
{
  let [ counterVisible, setcounterVisible] = useState(true)
  
  useEffect(function (){
    setInterval( function (){
      setcounterVisible( c => !c)
    }, 1000)
  },[])
  // setInterval(function(){
  //   setcount(count+1)
  // },1000)
  return (
    <div>
      {counterVisible && <Counter></Counter>}
    </div>
  )
}

function Counter ()
{
  const [ count , setcount]=useState(0)

  useEffect(function (){
    console.log("hii there")
    let clock = setInterval( function ()
    {
      console.log("inside interval")
      // setcount(count => count +1)
      // setcount(function (ctn) {
      //   return ctn+1;
      // })
      setcount(count => count +1)
    }, 1000)

    return function(){
      console.log("unmount")
      clearInterval(clock)
    }
  }, [])

  function increaseCount(){
    setcount(count+1)
  }

  return <div>
    <h1 id='text'>{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
  </div>
}

export default App
