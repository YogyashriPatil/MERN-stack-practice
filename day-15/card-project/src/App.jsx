import { useEffect, useState } from "react"

function App() {

  const [todos, settodos]=useState([])
  useEffect( () => {
    fetch("https://sum-server.100xdevs.com/todos")
     .then(async function (res) {
      const json=await res.json();
      settodos(json);
     })
  },[])

  return (
    <div>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title,description}) {
  <div>
    <h1>
      {title}
    </h1>

    <h4>
      {description}
    </h4>
  </div>
}
// // function TextComponent() {
// //   return <div>
// //     hi there
// //   </div>
// // }

// function CardWrapper({children}) {
//     // create a diiv whihc has a border (hint: the way to create a border is border )
//     // and inside the div, renders the prop

//     return <div style={{border: "2px solid black"}}>
//       {children}
//     </div>
// }

export default App
 