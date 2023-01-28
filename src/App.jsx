import React from 'react'
import Forms from './components/forms'
import {Routes , Route} from "react-router-dom"
import Room from './pages/room'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Forms/>} />
        <Route path='/:room_id' element={<Room/>} />
      </Routes>
    </div>
  )
}

export default App