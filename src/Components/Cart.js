import { CloseOutlined, GiftFilled, SendOutlined } from '@ant-design/icons'
import React from 'react'
import {useShop} from './ShopContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {products, total , removeFromCart, updatePrice} = useShop()
    
    
    const removeHandler = () =>{
        
        removeFromCart(products)
    }
    
    
  return (
   <div className={total === 0 ? `` : `cartBg`}>
     <div className=' relative top-[6rem] max-w-xl mx-auto bg-gray-100 shadow-2xl  '>
     {total === 0 ? <div className='mx-auto text-center'> <img src='emptycart.png' className='h-[20rem] w-full' /> </div> :
        <div className='text-lg font-semibold text-right  text-slate-500'>Total Cost: <span className='text-orange-600 font-bold '>${total}</span></div> }
        {products.map((product, index) => 
        <div key={index}>
            <div className='flex justify-between p-4 bg-white shadow-2xl  '>
                <div className=' '>
                 <div className='flex space-x-3'>
                 <img src='pic2.jpg' className='w-[3rem] h-[3rem] rounded-full '/> 
                 <span className='text-xl font-bold text-blueblue relative top-3 '>  {product.title}</span><br/>
                 </div>
                 <span  className='text-orange-700 text-xl font-semibold text-center '>${product.price}</span>

                 <div className='mt-2'>
                  <><span className='text-md font-extrabold '>Shopify</span> <GiftFilled className='relative bottom-1 text-md' /> <span className='text-orange-600 text-md font-bold'>Express</span></>
                 <div className='text-sm text-slate-500'>Eligible For Free Delivery For Orders $100 And Above In Accra (Including Large Items)</div>
                
                <div className='flex space-x-3 mt-4 relative '>
                  <span className='bg-orange-300 text-white text-md px-3 py-1 cursor-pointer'>-</span>
                  <span className='text-sm font-semibold relative top-1'> 1 </span>
                  <span className='bg-orange-300 text-white text-md px-3 py-1 cursor-pointer' onClick={updatePrice}>+</span>
                </div>

                 </div>

                  </div> 
               
               <CloseOutlined className='text-sm  relative bottom-1 ' onClick={removeHandler}/>
                 </div>
                 <hr className='mb-1 text-slate-900'/>
        </div>
        )}
        
        <div className='p-4 flex justify-between '>
        <Link to='/' className=' underline'>{total === 0 ? 'Add An Item To Cart' : 'Continue Shopping'} </Link>
        {total === 0 ?  <Link to='/checkout' className='px-4 py-2 text-white bg-orange-500'>Checkout</Link>:  <Link to='/checkout' className='px-4 py-2 text-white bg-orange-500'>Checkout</Link>}
        </div>

        </div>
   </div>
  )
}

export default Cart