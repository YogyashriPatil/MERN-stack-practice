import { useEffect, useState } from 'react'
import './App.css' 
import axios from "axios";

function App() {
  const [selectedId,setselectedId] = useState(1);
  return (
      <div>
        <button onClick={function (){
          setselectedId(1);
        }}>1</button>

        <button onClick={function (){
          setselectedId(2);
        }}>2</button>

        <button onClick={function () {
          setselectedId(3);
        }}>3</button>

        <button onClick={function () {
          setselectedId(4);
        }}>4</button>

        <button onClick={function () {
          setselectedId(5);
        }}>5</button>

        <Todo id={selectedId} />
      </div>    
  )
}

function Todo({id}){
  const [todo,settodo] = useState({});

  useEffect( () => {
    axios.get("https://sum-server.100xdevs.com/todo?id="+id)
      .then(response => {
        settodo(response.data.todo)
      })
  }, [id])

  return <div>
    id : {id}
    <h1>
      {todo.title}
    </h1>
    <h3> 
      {todo.description}
    </h3>
  </div>
}

export default App;