import React, { useState } from 'react'
import { CompassOutlined, MenuOutlined, ToolOutlined } from '@ant-design/icons';
import { Button, Divider, Drawer } from 'antd';
import { ArrowRightOutlined, BikeScooterOutlined, CancelOutlined, CardGiftcardOutlined, CarRentalOutlined, ChairOutlined, ComputerOutlined, DesktopMacOutlined, FavoriteOutlined, GamepadOutlined, LoyaltyOutlined, PhoneAndroidOutlined, QuestionAnswerOutlined, ReviewsOutlined, RiceBowlOutlined, StarOutline, StoreOutlined, TvOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const SideNav = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
      console.log(!open)
    };
  
    const onClose = () => {
      setOpen(false);
    };
  return (
    <>
 <span className='inline-block' onClick={showDrawer}><MenuOutlined className='relative  bottom-2 right-4 text-xl cursor-pointer' /></span>
      <Drawer
       title={
        <div className='brand text-3xl text-slate-700 hover:text-white relative left-7'>Hommie 
        <span className='relative bottom-7 bg-orange-500 p-1 rounded-full -left-[5rem] text-[8px] text-white'>Mart</span>
           </div>
       }
       placement="left" 
       onClose={onClose} 
       open={open}
       getContainer={false}
       visible={open}
       width='320'
       >
        
       <div className='w-full p-1'>
        <div className='flex justify-between text-md'><span className='text-orange-500 font-bold'>HOMMIE ACOOUNT</span> <ArrowRightOutlined className='text-slate-600' /> </div>
       
       <div className='mt-4 grid gap-4'>
       <Link to='' className='text-lg text-slate-700 font-semibold' onClick={onClose}><LoyaltyOutlined /> <span className='relative left-4'>Orders</span></Link>
       <Link to='' className='text-lg text-slate-700 font-semibold' onClick={onClose}><FavoriteOutlined /> <span className='relative left-4'>Saved Items</span></Link>
       <Link to='' className='text-lg text-slate-700 font-semibold' onClick={onClose}><CardGiftcardOutlined /> <span className='relative left-4'>Vouchers</span></Link>
       <Link to='' className='text-lg text-slate-700 font-semibold' onClick={onClose}><ReviewsOutlined /> <span className='relative left-4'>Pending Reviews</span></Link>
       </div>

      <Divider></Divider>
       <div className='flex justify-between text-md mt-4'><span className='text-orange-500 font-bold'>OUR CATEGORIES</span> <span className='underline text-slate-600'>See All</span> </div>
       <div className='mt-4 grid gap-4'>
       <Link to='' className='text-lg text-slate-700 font-semibold' onClick={onClose}><StoreOutlined /> <span className='relative left-4'>Supermarket</span></Link>
       <Link to='' className='text-lg text-slate-700 font-semibold' onClick={onClose}><PhoneAndroidOutlined /> <span className='relative left-4'>Phones & Tablet</span></Link>
       <Link to='' className='text-lg text-slate-700 font-semibold' onClick={onClose}><TvOutlined /> <span className='relative left-4'>Electronics</span></Link>
       <Link to='' className='text-lg text-slate-700 font-semibold' onClick={onClose}><DesktopMacOutlined /> <span className='relative left-4'>Computing</span></Link>
       <Link to='' className='text-lg text-slate-700 font-semibold' onClick={onClose}><ChairOutlined /> <span className='relative left-4'>Homes & Offices</span></Link>
       <Link to='' className='text-lg text-slate-700 font-semibold' onClick={onClose}><StarOutline /> <span className='relative left-4'>Fashion</span></Link>
       <Link to='' className='text-lg text-slate-700 font-semibold' onClick={onClose}><GamepadOutlined /> <span className='relative left-4'>Gaming</span></Link>


       </div>

       <Divider></Divider>
       <div className='flex justify-between text-md mt-4'><span className='text-orange-500 font-bold'>Help Center</span></div>
       <div className='mt-4 grid gap-4'>
       <Link to='' className='text-lg text-slate-700 font-semibold' onClick={onClose}><QuestionAnswerOutlined /> <span className='relative left-4'>Help Center</span></Link>
       <Link to='' className='text-lg text-slate-700 font-semibold' onClick={onClose}><CompassOutlined /> <span className='relative left-4'>Track Order</span></Link>
       <Link to='' className='text-lg text-slate-700 font-semibold' onClick={onClose}><ToolOutlined /> <span className='relative left-4'>Settings</span></Link>
      
       </div>

       </div>

      </Drawer>
    </>
  )
}

export default SideNav