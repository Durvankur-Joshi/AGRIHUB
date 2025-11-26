import React from 'react'
import Navbar from '../components/Navbar'
import bgimg from '../assets/homebg.jpg'
import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <>
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <Navbar />
        <div className="flex justify-center px-4 mt-32 sm:mt-40">
          <h1 className="text-white font-extrabold text-center 
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Freshness Delivered at Your Doorstep
          </h1>
        </div>

        
        <div className="flex justify-center mt-10">
          <Button
            className="bg-green-700 text-white px-8 py-4 text-lg 
                       hover:bg-green-900 shadow-lg rounded-xl">
            View Products
          </Button>
        </div>

      </div>
    </>
  )
}

export default Home
