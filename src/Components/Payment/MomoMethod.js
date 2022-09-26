import React from 'react'

const MomoMethod = () => {
  return (
    <>
<div className='  mb-3'>
               <div className='mb-2'> <label htmlFor='name' className='mb-2 text-white text-md font-semibold font-monspace bg-orange-400 p-2'>Mobile Wallet</label></div>
               <select name="provider" className='w-full p-2 border rounded-md'>
               <option value="">Select Your Service Provider</option>
             <option value="mtn">MTN</option>
            <option value="Vodafone">Vodafone</option>
          <option value="at">AirtelTigo</option>
          <option value="glo">Glo</option>
    </select>
            </div>

            <div className='  mb-3'>
               <div className='mb-2'> <label htmlFor='email' className='mb-2 text-slate-700 text-md font-semibold font-monspace'>Wallet Number </label></div>
                <input type='number' className='w-full p-2 border rounded-md' />
            </div>

            <div className='  mb-3'>
               <div className='mb-2'> <label htmlFor='email' className='mb-2 text-slate-700 text-md font-semibold font-monspace'>Reference </label></div>
                <input type='text' className='w-full p-2 border rounded-md' />
            </div>
    </>
  )
}

export default MomoMethod