import { BranchesOutlined, GiftOutlined, PhoneOutlined } from '@ant-design/icons'
import ElectricMopedOutlinedIcon from '@mui/icons-material/ElectricMopedOutlined';
import React from 'react'

const InfoSection = () => {
  return (
    <div className='grid gap-1 w-full'>
    <div className='mt-2 bg-white p-4 shadow-2xl '>
        <h1 className='hidden lg:blockhidden lg:block'><PhoneOutlined className='relative bottom-1 text-lg p-2 border border-red-800 rounded-full transition-all animate-bounce' /> Help Center</h1>
        <div className='text-center relative bottom-3 font-monospace hidden lg:blockhidden lg:block'>How Can We help You ?</div>

        <div className='mt-3'>
        <h1><BranchesOutlined className='relative bottom-1 text-lg p-2 border border-red-800 rounded-full' /> Easy Returns</h1>
        <div className='text-center relative bottom-3 font-monospace'>Up to 15 Days</div>
    </div>
    </div>

    <div className='mt-2 bg-orange-600 p-4 shadow-2xl text-slate-200'>
        <h1 className='text-white font-bold'><GiftOutlined className='relative bottom-1 text-lg p-2 border border-red-800 rounded-full' /> FREE DELIVERY</h1>
        <div className='text-center relative font-semibold font-monospace hidden xl:block'>Order Any Item Above $100 For Free Delivery </div>
           <div className='bg-red-700 p-1 rounded-lg mt-2 text-center'> <a href='#free' className='text-white text-sm'>Order Now <ElectricMopedOutlinedIcon className='text-2xl'/></a></div>
    </div>
</div>
  )
}

export default InfoSection