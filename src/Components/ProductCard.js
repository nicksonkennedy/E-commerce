import React,{useState, useEffect} from 'react'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import {useShop} from './ShopContext'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const ProductCard = ({Data}) => {
    const {products, addToCart, removeFromCart} = useShop()


    const [IsInCart, setIsInCart] = useState(false)
    useEffect(() => {
      const productIsInCart = products.find((product) => product.title === Data.title)
    if(productIsInCart){
        setIsInCart(true)
    }else{
        setIsInCart(false)
    }

    }, [products, Data.title])

    const title = Data.title;
    const price = Data.price
    const handleClick = ()=>{
        const product = {title, price}
        if(IsInCart){
            removeFromCart(product)
            toast(`${title} Removed From Cart`);
        }else{
            addToCart(product)
            toast(`${title} Added To Cart`);
        }
    }
    
  return (
    <div className='relative bg-white shadow-xl  w-full '>
         <ToastContainer position="bottom-left" pauseOnHovertype='success' theme='light' autoClose={3000}/>
            <img src={Data.image} alt='shopping item'  className='relative h-[20rem] ' />
            <div className='absolute bottom-[12rem] left-[83%] pointer-cursor' onClick={handleClick}>
                 {IsInCart ? 
                  <div className=' bg-red-600 rounded-full cursor-pointer'><span className=' text-white text-lg p-2 font-bold ' >-</span></div> :
                 <div className=' bg-blueblue rounded-full cursor-pointer'><span className=' text-white text-lg p-1 font-bold ' >+</span></div>
                 
                 }
                  </div>

            <div className='absolute bg-slate-900 p-1 bottom-1 w-full' >
                <h1 className='text-white text-center font-bold text-md '>{Data.title}</h1>
                <h3 className='text-white text-center text-xl'>$ {Data.price}</h3>
            </div>
        </div>
  )
}

export default ProductCard