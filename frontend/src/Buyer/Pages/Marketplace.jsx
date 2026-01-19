import React from 'react'
import Searchbar from '../components/Searchbar'
import Filters from '../components/Filters'
import ProductCard from '../components/ProductCard'

const Marketplace = () => {
  return (
    <>
   <div className="mb-4 flex items-center justify-between px-4 py-3 gap-5 bg-slate-200 pl-3.5 pr-3.5 rounded-md">
  <Searchbar />
  <Filters />
</div>
 <div
 className='grid grid-cols-1 gap-5 md:grid-cols-2'>
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
 </div>
    </>
  )
}

export default Marketplace