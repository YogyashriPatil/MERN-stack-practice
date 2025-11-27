import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return <div>
      <Card>
        <h2>Card Title</h2>
        <p> This is some content inside the card. </p>
      </Card>

      <Card>
        <h2>Another card</h2>
        <p>This card has different content</p>
      </Card>
      
    </div>
}

function Card ({Children}) {
  return <div style={{
      border: '1px solid #cc',
      borderRadius: '5px',
      borderBlockColor: 'yellow',
      padding: '20px',
      margin: '10px',
      boxShadow:'2px 2p 5pxrgba(0,0,0,0.1)',
    }}>
      {Children}
  </div>
}

export default App
