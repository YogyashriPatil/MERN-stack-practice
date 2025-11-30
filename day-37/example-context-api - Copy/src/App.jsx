import { useState } from 'react';
import './App.css'
import { useFetch} from './hooks/useFetch';
// custome hook

function App() {
  const [currentPost, setcurrentPost] = useState(1);
  const { postTitle , loading} = useFetch("https://jsonplaceholder.typicode.com/posts/"+currentPost, 10);

  if(loading){
    return <div>
      Loading  . . .
    </div>
  }
  return <div>
    <button onClick={() => setcurrentPost(1)}>1</button>
    <br /> <br />
    <button onClick={() => setcurrentPost(2)}>2</button>
    <br /><br />
    <button onClick={() => setcurrentPost(3)}>3</button>
    <br /><br />
    <button onClick={() => setcurrentPost(4)}>4</button>
    <br /><br />
    <button onClick={() => setcurrentPost(5)}>5</button>
    <br /><br />
    {JSON.stringify(postTitle)}
  </div>
}

export default App
