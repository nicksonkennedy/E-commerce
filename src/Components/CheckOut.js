import { ContactsOutlined, CreditCardOutlined, UserOutlined } from '@ant-design/icons'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {useShop} from './ShopContext'
import CreditCardMethod from '../Components/Payment/CreditCardMethod'
import PaypalMethod from '../Components/Payment/PaypalMethod'
import MomoMethod from '../Components/Payment/MomoMethod'

const CheckOut = () => {
    const [CreditCard, setCreditCard] = useState(true)
    const [Paypal, setPaypal] = useState(false)
    const [Momo, setMomo] = useState(false)

    const creditcardHandler =() =>{
        setCreditCard(true)
        setPaypal(false)
        setMomo(false)
    }
    const paypaHandler =() =>{
        setPaypal(true)
        setCreditCard(false)
        setMomo(false)
    }
    const MomoHandler =() =>{
        setMomo(true)
        setCreditCard(false)
        setPaypal(false)
    }
    const {total } = useShop()
  return (
    <div className='relative top-[6rem] max-w-4xl mx-auto bg-white shadow-2xl'>

       <div className='grid sm:grid-cols-3 gap-6 p-5'>
       <div className=''>
        <h4 className='font-extrabold'>Your Details <UserOutlined className='relative bottom-1' /></h4>
        <form className='mt-5'>
            <div className=' mb-3'>
               <div className='mb-2'> <label htmlFor='name' className='mb-2 text-slate-700 text-md font-semibold font-monspace'>Full Name <span className='text-[10px]'>(Name on ID Card)</span></label></div>
                <input type='text' className='w-full p-2 border rounded-md' />
            </div>

            <div className='  mb-3'>
               <div className='mb-2'> <label htmlFor='email' className='mb-2 text-slate-700 text-md font-semibold font-monspace'>Email Address </label></div>
                <input type='email' className='w-full p-2 border rounded-md' />
            </div>

            <div className='  mb-3'>
               <div className='mb-2'> <label htmlFor='email' className='mb-2 text-slate-700 text-md font-semibold font-monspace'>Country </label></div>
                <input type='text' className='w-full p-2 border rounded-md' />
            </div>
            <div className='  mb-3'>
               <div className='mb-2'> <label htmlFor='email' className='mb-2 text-slate-700 text-md font-semibold font-monspace'>City / Region </label></div>
                <input type='text' className='w-full p-2 border rounded-md' />
            </div>

            <div className='  mb-3'>
               <div className='mb-2'> <label htmlFor='email' className='mb-2 text-slate-700 text-md font-semibold font-monspace'>Telephone Number </label></div>
                <input type='number' className='w-full p-2 border rounded-md' />
            </div>
        </form>

        </div>


        <div className=''>
        <h4 className='font-extrabold'>Shipping / Billing Address <ContactsOutlined className='relative bottom-1' /></h4>
        <form className='mt-5'>
            <div className='  mb-3'>
               <div className='mb-2'> <label htmlFor='name' className='mb-2 text-slate-700 text-md font-semibold font-monspace'>Country <span className='text-[10px]'>(Receipient Location)</span></label></div>
                <input type='text' className='w-full p-2 border rounded-md' />
            </div>

            <div className='  mb-3'>
               <div className='mb-2'> <label htmlFor='email' className='mb-2 text-slate-700 text-md font-semibold font-monspace'>City </label></div>
                <input type='text' className='w-full p-2 border rounded-md' />
            </div>

            <div className='  mb-3'>
               <div className='mb-2'> <label htmlFor='email' className='mb-2 text-slate-700 text-md font-semibold font-monspace'>Town </label></div>
                <input type='text' className='w-full p-2 border rounded-md' />
            </div>
            <div className='  mb-3'>
               <div className='mb-2'> <label htmlFor='email' className='mb-2 text-slate-700 text-md font-semibold font-monspace'>Address </label></div>
                <input type='text' className='w-full p-2 border rounded-md' />
            </div>

            <div className='  mb-3'>
               <div className='mb-2'> <label htmlFor='email' className='mb-2 text-slate-700 text-md font-semibold font-monspace'>Zid Code </label></div>
                <input type='text' className='w-full p-2 border rounded-md' />
            </div>
        </form>

        </div>


        <div className=''>
        <h4 className='font-extrabold'>Payment Method <CreditCardOutlined className='relative bottom-1' /></h4>
        <form className='mt-5'>
        <div className=' flex space-x-5 mb-3 mx-auto'>
        <span className='flex'>
      
        <img src='mastervisa.png' className='h-[2rem] w-[4rem] relative top-2 left-1 cursor-pointer' onClick={creditcardHandler}/>
       
        </span>

        <span>
       
            <img src='paypal.jpg' className='h-[3rem] w-[3rem] relative  left-1 cursor-pointer' onClick={paypaHandler}  />
        </span>

        <span className='flex'>
   
        <img src='momo.jpg' className='h-[2rem] w-[5rem] relative top-2 cursor-pointer' onClick={MomoHandler}/>
        </span>
            </div>

            {CreditCard && < CreditCardMethod/>}
            {Paypal && <PaypalMethod />}
            {Momo && <MomoMethod />}
            
            <div className=' mt-10'>
               <hr className='mb-4' />
               <h1 className='font-monospace font-semibold text-lg text-center'>TOTAL</h1>
                <div className='text-center text-xl text-orange-800 font-bold font-monospace'> ${total} </div>
               <div className='mt-3 w-ful  bg-blueblue p-2 text-center'> <Link to='/success' className=' text-white'>Complete Purchase </Link> </div>
            </div>
           
        </form>

        </div>

       </div>

    </div>
  )
}

export default CheckOut