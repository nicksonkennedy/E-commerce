import React from 'react'
import { Link } from 'react-router-dom'
import OrealBrand from './OrealBrand'

const AwesomeDeals = () => {
  return (
    <div className='relative max-w-8xl top-[17rem] mx-auto'>
<div className='bg-orange-500 p-2 w-full text-center mx-auto'> <span className='text-white font-semibold font-monospace text-xl '>Don't Miss These Awesome Deals </span> </div>
    
    
    <div className='relative top-1 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-1'>
        <Link to=''><img src='/Deals/desk1.png' alt='awesome deals' className='w-full h-auto md:h-[10rem] rounded-lg' /></Link>
        <Link to=''><img src='/Deals/desk2.png' alt='awesome deals' className='w-full h-auto md:h-[10rem] rounded-lg' /></Link>
        <Link to=''><img src='/Deals/desk3.png' alt='awesome deals' className='w-full h-auto md:h-[10rem] rounded-lg' /></Link>
        <Link to=''><img src='/Deals/desk4.png' alt='awesome deals' className='w-full h-auto md:h-[10rem] rounded-lg' /></Link>
        <Link to=''><img src='/Deals/desk5.png' alt='awesome deals' className='w-full h-auto md:h-[10rem] rounded-lg' /></Link>
        <Link to=''><img src='/Deals/desk6.jpg' alt='awesome deals' className='w-full h-auto md:h-[10rem] rounded-lg' /></Link>
    </div>

<div className='relative top-5'>
<OrealBrand />
</div>

    <div className='relative top-5'>
    <div className='bg-orange-400 p-2 w-full text-center mx-auto'> <span className='text-white font-semibold font-monospace text-xl '>Shop Fashion </span> </div>
        <div className='mt-2'> <img src='/Deals/fashion_desk.png' className='w-full h-auto md:h-[10rem]'/> </div>
    </div>
    
    </div>
    
  )
}

export default AwesomeDeals