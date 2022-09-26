import { ChairOutlined, DesktopMacOutlined, HeadphonesOutlined, SmartphoneOutlined, SportsEsportsOutlined, StarOutline } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className='bg-white shadow-2xl p-4 grid gap-7 w-full mx-auto'>
        <Link to='' className='text-slate-600 text-md hover:text-slate-400 transition-all hover:scale-110'> <DesktopMacOutlined className='relative bottom-[1px]' /> <span className='relative left-3'>Electronics</span></Link>
        <Link to='' className='text-slate-600 text-md hover:text-slate-400 transition-all hover:scale-110'> <ChairOutlined className='relative bottom-[1px]' /> <span className='relative left-3'>Home & Offices</span></Link>
        <Link to='' className='text-slate-600 text-md hover:text-slate-400 transition-all hover:scale-110'> <SmartphoneOutlined className='relative bottom-[1px]' /> <span className='relative left-3'>Phones </span></Link>
        <Link to='' className='text-slate-600 text-md hover:text-slate-400 transition-all hover:scale-110'> <HeadphonesOutlined className='relative bottom-[3px]' /> <span className='relative left-3'>Accessories</span></Link>
        <Link to='' className='text-slate-600 text-md hover:text-slate-400 transition-all hover:scale-110'> <StarOutline className='relative bottom-[3px]' /> <span className='relative left-3'>Fashion</span></Link>
        <Link to='' className='text-slate-600 text-md hover:text-slate-400 transition-all hover:scale-110'> <SportsEsportsOutlined className='relative bottom-[1px]' /> <span className='relative left-3'>Gaming</span></Link>
        <Link to='' className='text-slate-600 text-md hover:text-slate-400 transition-all hover:scale-110'> <SportsEsportsOutlined className='relative bottom-[1px]' /> <span className='relative left-3'>Beauty</span></Link>
    </div>
  )
}

export default SideNav