import './App.css'
import { usePostTitle } from './hooks/useFetch';
// custome hook

function App() {
  const postTitle = usePostTitle();
  return <div>
    {postTitle}
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
