import { useState } from 'react';
import './App.css'
import { usePrev } from './hooks/usePrev';
// custome hook

function App() {
  const [state, setState] =useState(0);
  const prev = usePrev(state);
  return <div>
    <button onClick={() =>  setState((state) => state + 1)}>click me {state}</button>
    <br />
    <p>The previous value was {prev} </p>
  </div>
}

export default App
