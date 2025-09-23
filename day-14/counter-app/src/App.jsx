import { useState } from 'react'

import './App.css'

// state , components
// let state = {
//   count : 0
// }
function App() {
  const [count, setCount] = useState(0);

  // console.log(count);

  function onClickHandler() 
  {
    setCount(count+1);
  }

  return (
    <div>
        {/* <button onClick={onClickHandler}> Counter {count}</button> */}
       <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>   
  )
}

// component 
function CustomButton(pros) {
  function onClickHandler() 
  {
    pros.setCount(pros.count+1);
  }
  return <button onClick={onClickHandler}> Counter {pros.count} </button>
}

export default App
