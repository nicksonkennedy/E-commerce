import { createContext , useReducer, useContext} from "react";
import shopReducer, { initialState } from "./shopReducer";

const ShopContext = createContext(initialState)

export const ShopProvider = ({children}) =>{
const [state, dispatch] = useReducer(shopReducer, initialState)

//add to cart functiom
const addToCart = (product) =>{
const updatedCart = state.products.concat(product)
updatePrice(updatedCart)
dispatch({
    type:'ADD_TO_CART',
    payload: {products: updatedCart}
})
}

//remove from cart
const removeFromCart = (product)=>{
    const updatedCart = state.products.filter((currentProduct) =>
        currentProduct.name !== product.name
    );
    updatePrice(updatedCart)
    dispatch({
        type:'REMOVE_FROM_CART',
        payload: {products: updatedCart}
    })
}

//price
const updatePrice = (products) =>{
    let total = 0
    products.forEach((product)=> (total += product.price))
    dispatch({
        type:'UPDATE_PRICE',
        payload: {total}
    })
}

//total
const totalNum = state.products.length

const value ={
    total: state.total,
    products: state.products,
    totalNum,
    addToCart,
    removeFromCart,
    updatePrice,
}

 return <ShopContext.Provider value={value}>
        {children}
 </ShopContext.Provider>

}

 export const useShop = () =>{
    const context =useContext(ShopContext)
    if(context === 'undefined'){
        throw new Error('')
    }
    return context;
 }

 export default useShop
