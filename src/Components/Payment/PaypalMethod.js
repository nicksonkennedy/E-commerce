import React from 'react'

const PaypalMethod = () => {
  return (
    <>
          <div className='  mb-3'>
          <div className='mb-2 mx-auto'> <label className='mb-2 text-white text-md font-semibold font-monspace bg-orange-400 p-2 text-center'>PayPal Payment</label></div>
               <div className='mb-2'> <label htmlFor='name' className='mb-2 text-slate-700 text-md font-semibold font-monspace'>Email Address</label></div>
                <input type='email' className='w-full p-2 border rounded-md' />
            </div>

            <div className='  mb-3'>
               <div className='mb-2'> <label htmlFor='email' className='mb-2 text-slate-700 text-md font-semibold font-monspace'>Account Passowrd </label></div>
                <input type='password' className='w-full p-2 border rounded-md' />
            </div>

           
    </>
  )
}

export default PaypalMethod