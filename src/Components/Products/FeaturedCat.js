import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedCat = () => {
  return (
    <div className='relative max-w-8xl top-[16rem] mx-auto'>
        <div className='bg-pink-400 p-2 w-full text-center mx-auto'> 
        <span className='text-white font-semibold font-monospace text-xl '>Featured Categories </span>
         </div>

         <div className='relative top-1 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-1'>
        <Link to=''>
            <img src='categories/men.jpg' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
            <div className='text-slate-700 text-center font-semibold font-monospace'>Men's Wear</div>
        </Link>
        <Link to=''>
            <img src='categories/shoe.jpg' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
            <div className='text-slate-700 text-center font-semibold font-monospace'>Men's Sneakers</div>
        </Link>

        <Link to=''>
            <img src='categories/trousers.jpg' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
            <div className='text-slate-700 text-center font-semibold font-monospace'>Men's Trousers</div>
        </Link>

        <Link to=''>
            <img src='categories/belt.jpg' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
            <div className='text-slate-700 text-center font-semibold font-monospace'>Men's Belt</div>
        </Link>

        <Link to=''>
            <img src='categories/watch.jpg' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
            <div className='text-slate-700 text-center font-semibold font-monospace'>Men's Watch</div>
        </Link>

        <Link to=''>
            <img src='categories/design.png' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
            <div className='text-slate-700 text-center font-semibold font-monospace'>Men's Design Wear</div>
        </Link>

        {/************************************************************************************ */}
        <Link to=''>
            <img src='categories/wbag.jpg' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
            <div className='text-slate-700 text-center font-semibold font-monospace'>women's Bag</div>
        </Link>

        <Link to=''>
            <img src='categories/wwatch.jpg' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
            <div className='text-slate-700 text-center font-semibold font-monospace'>Women's Watch</div>
        </Link>

        <Link to=''>
            <img src='categories/wjewery.jpg' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
            <div className='text-slate-700 text-center font-semibold font-monospace'>Women's Jewellery</div>
        </Link>

        <Link to=''>
            <img src='categories/wshoes.png' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
            <div className='text-slate-700 text-center font-semibold font-monospace'>Women's Sneakers</div>
        </Link>

        <Link to=''>
            <img src='categories/wt.jpg' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
            <div className='text-slate-700 text-center font-semibold font-monospace'>Women's Trousers</div>
        </Link>

        <Link to=''>
            <img src='categories/wwear.jpg' alt='featured categories' className='w-full h-auto md:h-[10rem] rounded-lg' />
            <div className='text-slate-700 text-center font-semibold font-monospace'>Women's Dress</div>
        </Link>
    </div>

    </div>
  )
}

export default FeaturedCat