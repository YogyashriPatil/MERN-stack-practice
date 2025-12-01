import { useState, useEffect } from 'react'

function useCounter(){
  const [count, setcount] = useState(0);

  function increaseCount(){
    setcount(count+1)
    // setcount(c => c+1)
  }
  return {
    count: count,
    increaseCount: increaseCount
  }
}
