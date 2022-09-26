import React from 'react'
import { Button, Result } from 'antd';

export const SuccessfullPurchase = () => {
  return (
    <div className='relative top-[6rem]'>
         <Result
    status="success"
    title="Successfully Purchased!!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy" href='/'>Buy Again</Button>
    ]}
  />
    </div>
  )
}
