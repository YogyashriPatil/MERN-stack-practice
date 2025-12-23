"use client"

import axios from "axios"
export default function(){
    return <div>
        Sign  in page <br />
        <input></input>
        <input></input>
        <button onClick={() =>{
            axios.post("http://localhost:3000/api/signin",{
                username:"asd",
                password:"asdasf"
            })
            localStorage.setItem("token", res.data.token)
        }}>Sign in </button> 
    </div>
}