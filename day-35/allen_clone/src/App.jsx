import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom"
import './App.css'

function App() {
  return <div>
      <BrowserRouter>
        <Link to='/'>
          Allen 
        </Link> | 
        <Link to='/neet/online-coaching-class-11'>
          Class 11
        </Link> |  
        <Link to='/neet/online-coaching-class-12'>
          class 12
        </Link>

        <Routes>
          <Route path='/neet/online-coaching-class-11' element={<Class11Program />} />
          <Route path='/neet/online-coaching-class-12' element={<Class12Program />} />
          <Route path='/' element={<Landing />} />

        </Routes>
      </BrowserRouter>

    </div>
}

function Landing(){
  return <div>
    welcome to allen
  </div>
}
function Class11Program(){
  return <div>
    NEET programs for class 11th
  </div>
}

function Class12Program(){
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/")
  }
  return <div>
    NEET programs for class 12th <br />
    <button onClick={redirectUser}>Go to home page</button>
  </div>
}

export default App
