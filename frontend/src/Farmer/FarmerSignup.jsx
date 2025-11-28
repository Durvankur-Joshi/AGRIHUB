import React from 'react'
import SignupForm from '@/components/signup-form'
import Logo from '../assets/Logo.png'
import farmerloginimage from "../assets/farmerloginimage.jpg"

const FarmerSignup = () => {
  return (
    <>
     <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
            <img
            className='w-24 h-auto'
             src={Logo} alt="Logo" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={farmerloginimage}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
    </>
  )
}

export default FarmerSignup