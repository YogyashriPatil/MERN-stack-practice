import { useState, createContext, useCallback, useContext, useEffect } from 'react'
import './App.css'

// custome hook
// function useCounter(){
//   const [count, setcount] = useState(0);

//   function increaseCount(){
//     setcount(count+1)
//     // setcount(c => c+1)
//   }
//   return {
//     count: count,
//     increaseCount: increaseCount
//   }
// }


function App() {
  const [post, setPost] = useState({})
  async function getPosts() {
    const response= await fetch("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response)
    const json = await response.json();
    setPost(json);
  }

  useEffect(() => {
    getPosts();
  },[])

  return <div>
    {post.title}
    
  </div>
}

// function Counter(){
//   const { count, increaseCount} = useCounter();
//   return <div>
//       {count}
//       <button onClick={increaseCount}>Increase {count}</button>
//   </div>
//}
export default App
