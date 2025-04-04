import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/store";
import { decrement, increment } from "../redux/quantity";

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cartData);
  const quantityValue = useSelector((state: RootState) => state.quantity)
  const dispatch  = useDispatch()




  return (
    <CartParent>
      <div className="titles">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>
      {cartItems.map((item) => {
        return (
          <div key={item.id} className="cartItem">
            <div className="img-title">
              <img src={item.images[0]} alt="" />
              <span>{item.title}</span>
            </div>
            <p className="price">
              $<span>{Math.round(item.price)}</span>
            </p>

            <form  className="quantityForm">
              <input 
               
                type="number" 
                placeholder="1" 
                min={1} 
              />
            </form>

            <p className="subtotal">
              $<span>{Math.round(item.price) * quantityValue}</span>
            </p>
          </div>
        );
      })}
    </CartParent>
  );
}

const CartParent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  .titles {
    padding: 24px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 80px;
  }
  .cartItem {
    padding: 24px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
    background: rgb(255, 255, 255);
    font-family: "Poppins", sans-serif;

    .img-title {
      display: flex;
      align-items: center;
      column-gap: 22px;

      img {
        width: 50px;
        height: 50px;
      }

      span {
        font-size: 16px;
        font-weight: 400;
      }
    }

    .quantityForm {
      width: 72px;
      height: 44px;
      border: 1.5px solid rgba(0, 0, 0, 0.4);
      border-radius: 4px;

      input{
        height: 100%;
        width: 100%;
        outline: none;
        padding: 12px;
      }
    }
  }
`;
