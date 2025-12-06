
import { useEffect, useState } from 'react'
import './App.css'
import { Sidebar4 } from './components/sidebars/Sidebar4'
import { SidebarToggle } from './icons/SidebarToggle'
function App() {
  const [sidebarOpen , setSidebarOpen] = useState(true)
   return (
    <div className='flex'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <MainContent sidebarOpen={sidebarOpen} />
    </div>
  )
}

function Sidebar({sidebarOpen, setSidebarOpen}) {
  if (!sidebarOpen) {
    return <div className='fixed top-0 left-0'>
        <div className='cursor-pointer hover:bg-slate-200' onClick={() => {
          setSidebarOpen(!sidebarOpen)
        }}>
          <SidebarToggle />
        </div>
    </div>
  }
    return <div className='w-96 h-screen bg-red-100 fixed top-0 left-0 md:relative'>
    <div>
      <div className='cursor-pointer hover:bg-slate-200' onClick={() => {
        setSidebarOpen(!sidebarOpen)
      }}>
        <SidebarToggle />
      </div>
    </div>
  </div>
}

function MainContent() {
  return  <div className='w-full'>
    <div className='h-72 bg-black hidden md:block'></div>
    <div className='grid grid-cols-11 gap-8 p-8'>
      <div className='h-96 rounded-2xl shadow bg-red-200 md:col-span-2 -translate-y-24 shadow-lg  col-span-11 hidden md:block'>

      </div>
      <div className='h-96 rounded-2xl shadow bg-green-200 md:col-span-6 shadow-lg col-span-11'>

      </div>
      <div className='h-96 rounded-2xl shadow bg-yellow-200 md:col-span-3 shadow-lg col-span-11'>

      </div>
    </div>
  </div>
}

export default App