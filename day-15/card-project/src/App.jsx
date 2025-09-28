import { useEffect } from "react"

function App() {
  useEffect(function() {
    alert("hello")
  })

  return (
    <div>
      hi there
    </div>
  )
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
 