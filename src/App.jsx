import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='w-screen h-screen text-white font-thin bg-gray-800 py-10 px-[20%]'>
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App