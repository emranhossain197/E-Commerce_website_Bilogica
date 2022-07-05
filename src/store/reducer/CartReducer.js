const CartReducer=(cartState = [], action)=>{
    switch (action.type) {
        case "ADD_PRODUCT_TO_CART":{
            const Product = cartState.find(item => item.id === action.payload.id)
            return Product ? cartState.map(item => (
                item.id === Product.id ? {...item, quantity: item.quantity + 1 }: item
            )): [...cartState, {...action.payload, quantity: 1}]
        }
        case "DELETE_PRODUCT":{
            return cartState.filter(item => item.id !== action.payload.id)
        }
        case"CLEAR_CART":{
            return []
        }
        case "MODIFY_QUANTITY":{
            const Product = cartState.find(item => item.id === action.payload.id)

            return Product.map(item =>(
                item.id === Product.id ? {...Product, quantity: action.payload.quantity}: item
            ))
        }
        default:
            return cartState;
            
    }

}
export default CartReducer