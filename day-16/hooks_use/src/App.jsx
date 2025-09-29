import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {

  const [selectedId, setselectedId] = useState(1);
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/todos")
  //     .then(function(response) {
  //       setTodos(response.data.todos)
  //     })
  // },[])

  return (
    <>
      <button onClick={function() {
        setselectedId(1)
      }}>1</button>
      <button onClick={function() {
        setselectedId(2)
      }}>2</button>
      <button onClick={function() {
        setselectedId(3)
      }}>3</button>
      <button onClick={function() {
        setselectedId(4)
      }}>4</button>
      <button onClick={function() {
        setselectedId(5)
      }}>5</button>

      <GettodoId id={setselectedId} />
        {/* {todos.map(todo => <Todo title={title} description={description} />)} */}
    </>
  )
}

function GettodoId({id})
{
  const [todo, setTodos] = useState(0);

  useEffect(() => {
     axios.get("https://sum-server.100xdevs.com/todos")
      .then(function(response) {
       setTodos(response.data.todo)
    })
  }, [id]) //every time id change it run 
  //your effect here
  return <div>
    Id: {id}
    <h1>
      {todo.title}
    </h1>
    <h4>
      {description}
    </h4>
    {/* <input type='number' placeholder='enter the todo id ' /> */}
  </div>
}
function Todo({title,description})
{
  return <div>
    <h1> {title} </h1>
    <h3> {description} </h3>
  </div>
}

export default App
