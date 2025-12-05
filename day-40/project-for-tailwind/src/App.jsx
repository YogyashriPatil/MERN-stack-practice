import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'

function App() {

  return (
    <div className='h-screen bg-blue-900'>
      <br />
      
      <Input type="text" placeholder="userName" />
      <Button disabled={false} Children={"Sign up "}>Sign up</Button>
    </div>
  )
}
export default App
