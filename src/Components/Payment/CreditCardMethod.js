import React from 'react'

const CreditCardMethod = () => {
  return (
    <>
<div className='  mb-3'>
<div className='mb-2'> <label htmlFor='name' className='mb-2 text-white text-md font-semibold font-monspace bg-orange-400 p-2'>Mastercard / Visacard</label></div>
               <div className='mb-2'> <label htmlFor='name' className='mb-2 text-slate-700 text-md font-semibold font-monspace'>Card Number</label></div>
                <input type='number' className='w-full p-2 border rounded-md' />
            </div>

            <div className='  mb-3'>
               <div className='mb-2'> <label htmlFor='email' className='mb-2 text-slate-700 text-md font-semibold font-monspace'>CVC Number </label></div>
                <input type='number' className='w-full p-2 border rounded-md' />
            </div>

            <div className='  mb-3'>
               <div className='mb-2'> <label htmlFor='email' className='mb-2 text-slate-700 text-md font-semibold font-monspace'>Expires </label></div>
                <input type='date' className='w-full p-2 border rounded-md' />
            </div>
    </>
  )
}

export default CreditCardMethod