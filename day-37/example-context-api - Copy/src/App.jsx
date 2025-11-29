import { useState, createContext, useCallback, useContext } from 'react'
import './App.css'

// custome hook
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
function App() {
  return <div>
    <Counter />
    <Counter />
    <Counter />
    <Counter />
  </div>
}

function Counter(){
  const { count, increaseCount} = useCounter();
  return <div>
      {count}
      <button onClick={increaseCount}>Increase {count}</button>
  </div>
}
export default App
