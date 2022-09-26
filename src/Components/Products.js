import React from 'react'
import { ShopData } from './ShopData'
import ProductCard from './ProductCard'


const Products = () => {

  return (
    <div className='relative top-[10rem]' id='free'>
        <div className='max-w-8xl mx-auto  grid md:grid-cols-4 gap-3'>
            {
            ShopData.map(Data => <ProductCard Data={Data} key={Data.id}/>)
            
            }

        

    </div>
    </div>
  )
}

export default Products