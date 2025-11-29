import React from 'react'
import { Button } from '@/components/ui/button'
import AddProductDialog from './AddProductDialog'
import MyProduct from '../MyProduct'
import Orders from '../Orders'
import { useNavigate } from 'react-router-dom'

const ActionButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className='bg-gray-100 h-20 w-full flex gap-5 justify-center items-center'>
        <AddProductDialog>
          <Button
            className="bg-white text-base font-medium hover:bg-green-200"
            variant="primary">Add Product</Button>
        </AddProductDialog>

        <Button
          className="bg-white text-base font-medium hover:bg-green-200"
          variant="primary"
          onClick={()=> navigate('/farmerdashboard/orders')}
          >Orders</Button>
          
        <Button
          className="bg-white text-base font-medium hover:bg-green-200"
          variant="primary"
          onClick={() => navigate('/farmerdashboard/myproduct')}>My Products</Button>
      </div>
    </>
  )
}

export default ActionButton