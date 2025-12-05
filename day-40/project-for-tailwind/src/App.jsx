import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'

function App() {

  return (
    <div className='h-screen bg-blue-900'>
      <Button disabled={false} Children={"Sign up "}>Sign up</Button>
    </div>
  )
}
export default App
