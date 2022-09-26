import { DropboxOutlined, GiftOutlined, SaveOutlined } from '@ant-design/icons'
import React from 'react'

const SubInfo = () => {
  return (
    <div className='relative max-w-8xl top-[8rem] grid md:grid-cols-3  gap-3 md:gap-1 mx-auto'>
        <div className='bg-white shadow-2xl flex space-5 text-xl p-4'>
            <GiftOutlined className='p-2 rounded-full border text-2xl bg-yellow-600 text-white '/>
            <div className='relative top-1 left-5 font-bold text-slate-600'>Free Bonus & Discounts</div>
        </div>

        <div className='bg-white shadow-2xl flex space-5 text-xl p-4'>
            <DropboxOutlined className='p-2 rounded-full border text-2xl bg-orange-600 text-white '/>
            <div className='relative top-1 left-5 font-bold text-slate-600'>Free Delivery Service</div>
        </div>

        <div className='bg-white shadow-2xl flex space-5 text-xl p-4'>
            <SaveOutlined className='p-2 rounded-full border text-2xl bg-blueblue text-white '/>
            <div className='relative top-1 left-5 font-bold text-slate-600'>Super Save Sales</div>
        </div>
    </div>
  )
}

export default SubInfo