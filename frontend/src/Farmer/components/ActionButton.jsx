import React from 'react'
import { Button } from '@/components/ui/button'

const ActionButton = () => {
  return (
    <>
       <div
        className='bg-gray-100 h-20 w-full flex gap-5 justify-center items-center'>

            <Button
            className="bg-white text-base font-medium hover:bg-green-200"
             variant="primary">Add Product</Button>
            <Button
            className="bg-white text-base font-medium hover:bg-green-200"
             variant="primary">Orders</Button>
            <Button
            className="bg-white text-base font-medium hover:bg-green-200"
             variant="primary">My Products</Button>

       </div>
    </>
  )
}

export default ActionButton