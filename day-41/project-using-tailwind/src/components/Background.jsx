import { useState } from "react"

export function Background(){
    return <div className={`h-screen bg-white dark:bg-blue-900 text-black dark:text-white`} >
        <button onClick={() => {
            document.querySelector("html").classList.toggle("dark", document.querySelector("html").classList[0]=="dark" ? false : true)
        }}>Toggle theme</button>
        <br />
        <br />
        <br />
        <br />

        <div className="text-2xl dark:text-red-400 text-blue-300">HI there</div>
        <h1 >Toggle theme</h1>
    </div>
}


// return (
//     <div className='h-screen bg-white dark:bg-black'>
//       <h1 className='text-black dark:text-white'>Hi there</h1>
//       <button onClick={() => {
//         document.querySelector("html").classList.toggle("dark")
//       }} className='dark:text-white'>Toggle theme</button>
//     </div>
//   )