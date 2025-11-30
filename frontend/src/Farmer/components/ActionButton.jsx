import React from 'react'
import { Button } from '@/components/ui/button'
import AddProductDialog from './AddProductDialog'
import MyProduct from '../MyProduct'
import Orders from '../Orders'
import { useNavigate } from 'react-router-dom'
import { BaggageClaim , LayoutDashboard } from 'lucide-react'

const ActionButton = () => {
  const navigate = useNavigate();
  return (
    <>
     <div className=" w-full flex justify-center p-5 items-center gap-10 bg-slate-100 ">
          <AddProductDialog>
          <Button className="px-6">+ Add Product</Button>
          </AddProductDialog>
          <Button className="px-4"
          onClick={()=> navigate('/farmerdashboard/orders')} >
            <BaggageClaim /> Orders</Button>
          <Button  className="px-4"
          onClick={()=> navigate('/farmerdashboard/myproduct')} > <LayoutDashboard />My product</Button>
        </div>
    </>
  )
}

export default ActionButton