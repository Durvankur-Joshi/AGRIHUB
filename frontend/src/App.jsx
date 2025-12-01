import { useState } from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FarmerLogin from './Farmer/FarmerLogin.jsx'
import FarmerSignup from './Farmer/FarmerSignup.jsx'
import FarmerDashboard from './Farmer/FarmerDashboard.jsx'
import Orders from './Farmer/Orders'
import MyProduct from './Farmer/MyProduct'
import Register from './Pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path = '/farmerlogin' element = {<FarmerLogin />} />
      <Route  path="/farmer-signup" element={<FarmerSignup />} />
      <Route path='/farmerdashboard'
      element ={<FarmerDashboard/>}/>
      <Route path='/farmerdashboard/orders'
      element={<Orders />} />
      <Route path='/farmerdashboard/myproduct'
      element={<MyProduct />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
