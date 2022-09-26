import {  QuestionCircleOutlined, ShoppingCartOutlined, UserOutlined,DownOutlined  } from '@ant-design/icons'
import React ,{useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import {  Badge } from 'antd';
import {useShop} from './ShopContext'
import SideNav from './SideNav';
import { Dropdown, Divider, Space } from 'antd';
import PersonIcon from '@mui/icons-material/Person';
import { CancelScheduleSendOutlined, CardMembershipOutlined, ChatBubbleOutline, CompassCalibrationOutlined, CurrencyBitcoinOutlined, Favorite, LoyaltyOutlined } from '@mui/icons-material';
const Nav = () => {
  const { totalNum} = useShop()
const location = useLocation()

const [changeLogo, setChangeLogo] = useState(false)




    //scroll nav
const brandLogo = () =>{
if(window.scrollY >=10){
  setChangeLogo(true)
}else{
  setChangeLogo(false)
}

} 
window.addEventListener('scroll', brandLogo)
  return (
    <div className={changeLogo ?
       `fixed w-full bg-blueblue shadow-2xl text-white p-3 flex justify-between z-50`:
       `fixed w-full bg-blueblue shadow-2xl text-white p-4 flex justify-between z-50`
      }>
        <div className='brand'><Link to='/' className='text-3xl text-white hover:text-white'>
          <span className='inline-block md:hidden'><SideNav /></span>
           Hommie <span className='relative bottom-7 bg-orange-500 p-1 rounded-full -left-[5rem] text-[8px]'>Mart</span></Link>
           </div>

        <div className='hidden md:flex justify-between space-x-6 relative right-10 '> 
        <div className='relative top-1 '> 
        <Dropdown 
        overlay={
        <div className='relative right-10 bg-white top-3 shadow-2xl p-3 w-[14rem]'>
         <div className=' text-center w-full py-2  bg-orange-600'> <Link to='' className='text-white'>Sign In</Link></div>
          <Divider></Divider>
          <div className='grid space-y-5'>
          <Link to='' className='text-slate-700 hover:text-slate-600 text-md'><PersonIcon className='text-lg relative bottom-1' /> <span className='relative left-3 font-semibold'>My Account</span></Link>
          <Link to='' className='text-slate-700 hover:text-slate-600 text-md'><Favorite className='text-lg relative bottom-1' /> <span className='relative left-3 font-semibold'>Saved Items</span></Link>
          <Link to='' className='text-slate-700 hover:text-slate-600 text-md'><LoyaltyOutlined className='text-lg relative bottom-1' /> <span className='relative left-3 font-semibold'>My Orders</span></Link>
          </div>
        </div>
      } 
        trigger={['click']}
        className='cursor-pointer'
        >
      <Space>
      <UserOutlined  className='text-2xl text-white'/> <span className='relative -left-2 top-1 text-lg font-semibold '>Account</span>
        <DownOutlined className='relative -left-1 top-0.5'/>
      </Space>
  </Dropdown>
        </div>

        <div className='relative top-1 '> 
        <Dropdown 
        overlay={
        <div className='relative left-[5rem] top-4 bg-white shadow-2xl p-3 w-[14rem]'>
  
          <div className='grid space-y-8'>
          <Link to='' className='text-slate-700 hover:text-slate-600 text-md'><QuestionCircleOutlined className='text-lg relative bottom-1' /> <span className='relative left-3 font-semibold'>Help Center</span></Link>
          <Link to='' className='text-slate-700 hover:text-slate-600 text-md'><CompassCalibrationOutlined className='text-lg relative bottom-1' /> <span className='relative left-3 font-semibold'>Track Order</span></Link>
          <Link to='' className='text-slate-700 hover:text-slate-600 text-md'><CancelScheduleSendOutlined className='text-lg relative bottom-1' /> <span className='relative left-3 font-semibold'>Order Cancellation</span></Link>
          <Link to='' className='text-slate-700 hover:text-slate-600 text-md'><CurrencyBitcoinOutlined className='text-lg relative bottom-1' /> <span className='relative left-3 font-semibold'>Returns & Funds</span></Link>
          <Link to='' className='text-slate-700 hover:text-slate-600 text-md'><CardMembershipOutlined className='text-lg relative bottom-1' /> <span className='relative left-3 font-semibold'>Payment &  Account</span></Link>
          </div>
          <Divider></Divider>
          <div className=' text-center w-full py-2  bg-orange-600 rounded-lg'><ChatBubbleOutline className='text-lg relative text-white right-7' /> <Link to='' className='text-white'>Live Chat</Link></div>
          
        </div>
      } 
        trigger={['click']}
        className='cursor-pointer'
        >
      <Space>
      <QuestionCircleOutlined  className='text-2xl text-white relative top-[2px]'/> <span className='relative -left-2 top-1 text-lg font-semibold '>Help</span>
        <DownOutlined className='relative -left-1 top-0.5'/>
      </Space>
  </Dropdown>
        </div>
      
         {location.pathname ==='/success' ? '' : <Link to='/cart' className='text-white text-2xl relative bottom-1'>
          <Badge count={totalNum} className=' '>
          <ShoppingCartOutlined  className='text-2xl text-white '/>
    </Badge>
             
              </Link>}
             
           </div>
          <div className='block md:hidden'>
          {location.pathname ==='/success' ? '' : <Link to='/cart' className='text-white text-2xl relative bottom-1'>
          <Badge count={totalNum} className=' '>
          <ShoppingCartOutlined  className='text-2xl text-white '/>
    </Badge>
             
              </Link>}
          </div>
    </div>
  )
}

export default Nav