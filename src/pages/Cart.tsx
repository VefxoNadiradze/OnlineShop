import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/store";
import { incrementFoo, decrementFoo } from "../redux/Cart";

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cartData);
  const dispatch = useDispatch();
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

            <div className="quantity">
              <button onClick={() => dispatch(decrementFoo(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(incrementFoo(item.id))}>+</button>
            </div>

            <p className="subtotal">
              $<span>{Math.round(item.price) * item.quantity}</span>
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

    .quantity {
      display: flex;
      align-items: center;

      button {
        font-size: 20px;
        width: 25px;
        height: 30px;
        box-sizing: border-box;
        outline: none;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 4px 0px 0px 4px;
        cursor: pointer;
        &:nth-child(3) {
          border-radius: 0px 4px 4px 0px !important;
        }
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 30px;
        color: rgb(0, 0, 0);
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        font-weight: 500;
        line-height: 28px;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        border-top: 1px solid rgba(0, 0, 0, 0.5);
      }
    }
  }
`;
