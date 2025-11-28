import React from 'react'
import FarmerNavbar from './components/FarmerNavbar'
import FarmerCards from './components/FarmerCards'
import ActionButton from './components/ActionButton'
import OrderTable from './components/OrderTable'

const FarmerDashboard = () => {
  return (
    <>
       <FarmerNavbar />
       <ActionButton />
       <FarmerCards />
       <OrderTable />
    </>
  )
}

export default FarmerDashboard