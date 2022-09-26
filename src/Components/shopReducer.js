export const initialState = {
total: 0,
products: [],
totalNumber: 0
}

const shopReducer = (state, action) =>{
    const {type, payload} = action

    switch(type){
        case "ADD_TO_CART":
            console.log("ADD_TO_CART", payload)
            return{
                ...state,
                products: payload.products
            }

            case "REMOVE_FROM_CART":
            return{
                ...state,
                products: payload.products
            }

            case "UPDATE_PRICE":
                return{
                    ...state,
                    total: payload.total
                }
                case "UPDATE_TOTAL_NUMBER":
                console.log("UPDATE_TOTAL_NUMBER" , payload)
                return{
                    ...state,
                    totalNumber: payload.totalNumber
                }

                default:
                    throw new Error('No case Found in Reducer Function')
    }
}

export default shopReducer