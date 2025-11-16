import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{background: "#dfe6e9", 
      height:"100vh"}}>
        <div style={{ display: "flex",justifyContent:"center"}}>
          <div>
            <div>
              <PostComponent />
              <br />
            </div>
            <div>
              <PostComponent />
              <br />
            </div>
            <div>
              <PostComponent />
              <br />
            </div>
          </div>
        </div>
    </div>
  )
}

const style = { width: 200, backgroundColor:"white",borderRadius:10, borderColor:"gray", borderWidth: 1, padding: 20 }

function PostComponent(){
  return <div style={style}>
    <div style={{display:"flex"}}>
      <img src={"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"} 
        style={{
          width:60,
          height:60,
          borderRadius:60
      }}/>
      <div style={{fontSize:10, marginLeft:10}}>
        <b>100xDevs</b>
        <div>26M+ Followers</div>
        <div>12m</div>
      </div>
    </div>      
                                       
    <div style={{fontSize:12}}>
      what to know how to win big? 
    </div>
  </div>
}
export default App
