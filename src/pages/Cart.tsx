import { useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../redux/store"


export default function Cart() {
   const cartItems = useSelector((state: RootState) => state.cartData)

  return (
     <CartParent>
        {
          cartItems.map(item => {
            return <div className="cartItem">
               
            </div>
          })
        }
     </CartParent>
  )
}

const CartParent = styled.div`
  
`