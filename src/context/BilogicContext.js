import { createContext } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"

export const BilogicContext = createContext()

const ContextProveder = (props) => {
   const Cart = useSelector(state => state.cart)
   const [CartShow, setCartShow] = useState(false)
   let TotalPrice = 0;
   for (let i = 0; i< Cart.length; i++){
      TotalPrice += Number(Cart[i].price * Cart[i].quantity)
   } 
   const ObjValue = {
      CartShow,
      setCartShow,
      TotalPrice
   }
   return (
      <BilogicContext.Provider value={ObjValue}>
         {props.children}
      </BilogicContext.Provider>
   )
}
export default ContextProveder
