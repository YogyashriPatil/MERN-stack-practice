import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const todos =[ {
    title:"Go to gym",
    done:false
  },
  {
    title:"eat food",
    done:true
  }];
  const todosComponents = todos.map(todo => <Todo title={todo.title} done={todo.done} /> )
  return <div>
      {/* {todosComponents}       */}
      <Todo key={1} title={"eat food"} done={false} />
      <Todo key={2} title={"go to college"} done={true} />
    </div>
}

function Todo ({title, done}) {
  return <div style={{
      border: '1px solid #cc',
      borderRadius: '5px',
      borderBlockColor: 'yellow',
      padding: '20px',
      margin: '10px',
      boxShadow:'2px 2p 5pxrgba(0,0,0,0.1)',
    }}>
      {title} - {done ? "Done !": "Not done"}
  </div>
}

export default App
