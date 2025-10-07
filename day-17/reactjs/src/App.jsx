import { useEffect, useState } from 'react'
import './App.css' 
import axios from "axios";

function App() {
  const [counter,setCounter] = useState(0);
  const [inputValue,setinputvalue] = useState(0)

  let count=0;
  for(let i=1;i<inputValue;i++)
  {
    count=count * 1;
  }
  return (
      <div>
         <input onchange={function (e) {
          setinputvalue(e.target.value);
         }} placeholder='Enter the number' />
           
           <br></br>
          Sume from 1 to {inputValue} is {count}
         <button onClick={() => {
          setCounter(counter+1);
          }}> Counter</button> 
      </div>    
  )
}

// function Todo({id}){
//   const [todo,settodo] = useState({});

//   useEffect( () => {
//     axios.get("https://sum-server.100xdevs.com/todo?id="+id)
//       .then(response => {
//         settodo(response.data.todo)
//       })
//   }, [id])

//   return <div>
//     id : {id}
//     <h1>
//       {todo.title}
//     </h1>
//     <h3> 
//       {todo.description}
//     </h3>
//   </div>
// }

export default App;