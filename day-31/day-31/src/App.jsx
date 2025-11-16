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
              <PostComponent 
                name={"yogyashri"}
                followerCount={12009}
                time={"2m ago"}
                image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxtx5uOH2FwWtC_-HAnN75PQqBFgfLF9D2w&s"}
                description={"what about the nature"}/>
              <br />
            </div>

            <div>
              <PostComponent 
                name={"vrushali"}
                followerCount={12}
                time={"1 hours age"}
                image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxtx5uOH2FwWtC_-HAnN75PQqBFgfLF9D2w&s"}
                description={"Like some thing interesting"}/>
              <br />
            </div>
            
            <div>
              <PostComponent 
                name={"kunal"}
                followerCount={12312}
                time={"2 days ago"}
                image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxtx5uOH2FwWtC_-HAnN75PQqBFgfLF9D2w&s"}
                description={"the fanstatic experience that i got to qork on this project"}/>
              <br />
            </div>
          </div>
        </div>
    </div>
  )
}

const style = { width: 200, backgroundColor:"white",borderRadius:10, borderColor:"gray", borderWidth: 1, padding: 20 }

function PostComponent({name, followerCount, time, image, description}){
  return <div style={style}>
    <div style={{display:"flex"}}>
      <img src={image} 
        style={{
          width:60,
          height:60,
          borderRadius:60
      }}/>
      <div style={{fontSize:10, marginLeft:10}}>
        <b>{name}</b>
        <div>{followerCount} Followers</div>
        <div style={{display:"flex"}}>
          <div>{time}</div>
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3Nt7u1mRQP08L1MPvKzKk_M3MabvtqqqVQ&s"} 
            style={{width:10, height: 10}}
          />
        </div>
      </div>
    </div>      
                                       
    <div style={{fontSize:12}}>
      {description} 
    </div>
  </div>
}

function profileComponent(){
  return <div>
    Profile
  </div>
}
export default App
