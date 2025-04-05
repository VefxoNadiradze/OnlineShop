import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/store";
import { incrementFoo, decrementFoo, clearCart} from "../redux/Cart";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

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

      {
        cartItems.length > 0 &&
        <div className="options">
        <div className="clear-home">
          <Link to={"/"} className="home c-hBtn">
            <IoHomeOutline />
          </Link>
          <button onClick={(() => dispatch(clearCart()))} className="clearCart c-hBtn">
            <MdOutlineDeleteOutline />
          </button>
        </div>
        <h3>
          Total: $<span>
            {cartItems.reduce((acc, item) => acc + Math.round(item.price) * item.quantity, 0)}
          </span>
        </h3>
      </div>
      }
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

  .options {
    box-sizing: border-box;
    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.207);
    border-radius: 4px;
    width: 300px;
    padding: 24px;
    .clear-home {
      display: flex;
      align-items: center;
      gap: 20px;

      .c-hBtn {
        background-color: transparent;
        border: none;
        font-size: 23px;
        cursor: pointer;
        transition: 0.3s ease;
        &:hover{
          transform: scale(1.1);
        }
      }
    }
    h3 {
      margin-top: 20px;
      color: rgb(0, 0, 0);
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      font-weight: 800;
      line-height: 28px;
    }
  }
`;
