import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [socket, setsocket] = useState();
  const inutRef = useRef();
  // more elegant
  function sendMessage(){
    if(!socket){
      return;
    }
    const message = inutRef.current.value;
    // @ts-ignore
    socket.send(message)
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080")
    setsocket(ws)
    ws.onmessage = (ev) => {
      alert(ev.data)
    }
  },[])
  return <div>
    <input ref={inutRef} type='text' placeholder='message..' ></input>
    <button onClick={sendMessage}>Send</button>
  </div>

}

export default App
