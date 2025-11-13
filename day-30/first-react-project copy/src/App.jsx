import { useEffect, useState } from 'react'

import './App.css'

function App() {
  let counterVisible = true

  // setInterval(function(){
  //   setcount(count+1)
  // },1000)
  return (
    <div>
      {counterVisible ? <Counter> {count} </Counter> : null}
    </div>
  )
}
function Counter (){
  const [ count , setcount]=useState(0)

  useEffect(function (){
    setInterval( function (){
      // setcount(count => count +1)
      setcount(function (ctn) {
        return ctn+1;
      })

      setcount(count => count +1)
    }, 1000)
  }, [])

  function increaseCount(){
    setcount(count+1)
  }
}

export default App
