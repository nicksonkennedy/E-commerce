import React from 'react'

import { Link } from 'react-router-dom'

const OtherCat = () => {
  return (
    <div className='relative max-w-8xl top-[20rem] mx-auto'>
<div className='bg-orange-800 p-2 w-full text-center mx-auto'> <span className='text-white font-semibold font-monospace text-xl '>We've got all your needs covered </span> </div>
    
    
    <div className='relative top-1 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-1'>
    <Link to=''>
            <img src='flash/covered/electronics.png' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
            <div className='text-slate-700 text-center font-semibold font-monospace'>Electronics</div>
        </Link>

        <Link to=''>
            <img src='flash/covered/super.png' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
            <div className='text-slate-700 text-center font-semibold font-monospace'>Supermarkets</div>
        </Link>

        <Link to=''>
            <img src='flash/covered/women.png' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
            <div className='text-slate-700 text-center font-semibold font-monospace'>Women Fashion</div>
        </Link>

        <Link to=''>
            <img src='flash/covered/men.png' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
            <div className='text-slate-700 text-center font-semibold font-monospace'>Men Fashion</div>
        </Link>

        <Link to=''>
            <img src='flash/covered/computing.png' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
            <div className='text-slate-700 text-center font-semibold font-monospace'>Computing</div>
        </Link>

        <Link to=''>
            <img src='flash/covered/phone.png' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
            <div className='text-slate-700 text-center font-semibold font-monospace'>Phones & Accessories</div>
        </Link>
    </div>


    <div className='relative top-5'>
    <div className='bg-pink-400 p-2 w-full text-center mx-auto'> <span className='text-white font-semibold font-monospace text-xl '>Shop & Phone Accessories </span> </div>
        <div className='mt-1'> <img src='/flash/phone&acc.png' className='w-full h-auto md:h-[10rem]'/> </div>
    </div>
    
    </div>
  )
}

export default OtherCat