import React from 'react'

import { Link } from 'react-router-dom'
const ExlusiveCat = () => {
  return (
    <div className='relative max-w-8xl top-[22rem] mx-auto'>
<div className='bg-orange-800 p-2 w-full text-center mx-auto'> <span className='text-white font-semibold font-monospace text-xl '>Exclusive Brand Partners </span> </div>
    
    
    <div className='relative top-1 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-1'>
    <Link to=''>
            <img src='exclusive/sam.png' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
        </Link>

        <Link to=''>
            <img src='exclusive/Syinix.png' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
        </Link>

        <Link to=''>
            <img src='exclusive/tecno.png' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
        </Link>

        <Link to=''>
            <img src='exclusive/itel.png' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
        </Link>

        <Link to=''>
            <img src='exclusive/xiaomi.png' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
        </Link>

        <Link to=''>
            <img src='exclusive/Oraimo.png' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
        </Link>

        <Link to=''>
            <img src='exclusive/Garnier.jpg' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
        </Link>

        <Link to=''>
            <img src='exclusive/Guinness.png' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
        </Link>

        <Link to=''>
            <img src='exclusive/Jameson.png' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
        </Link>

        <Link to=''>
            <img src='exclusive/maybelline.jpg' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
        </Link>

        <Link to=''>
            <img src='exclusive/nivea.png' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
        </Link>

        <Link to=''>
            <img src='exclusive/all.png' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
        </Link>
    </div>


    </div>
  )
}

export default ExlusiveCat