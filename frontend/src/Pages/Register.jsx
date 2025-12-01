import React from 'react'
import {SignupForm} from '@/components/signup-form'
import Logo from "@/assets/Logo.png"
const Register = () => {
  return (
    <>
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <img src={Logo} alt="logo"
          className='w-40 ' />
        </a>
        <SignupForm />
      </div>
    </div>
    </>
  )
}

export default Register