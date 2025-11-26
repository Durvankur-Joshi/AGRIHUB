import { useState } from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FarmerLogin from './Farmer/FarmerLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path = '/farmerlogin' element = {<FarmerLogin />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
