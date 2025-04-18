import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/store";
import { incrementFoo, decrementFoo, clearCart } from "../redux/Cart";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cartData);
  const dispatch = useDispatch();
  return (
    <>
      <CartParent>
        {cartItems.length < 1 ? (
          <Empty className="emptyCart">Your Cart is Empty</Empty>
        ) : (
          <div className="titles">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
        )}
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
                <button onClick={() => dispatch(decrementFoo(item.id))}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(incrementFoo(item.id))}>
                  +
                </button>
              </div>

              <p className="subtotal">
                $<span>{Math.round(item.price) * item.quantity}</span>
              </p>
            </div>
          );
        })}

        {cartItems.length > 0 && (
          <div className="options">
            <div className="clear-home">
              <Link to={"/"} className="home c-hBtn">
                <IoHomeOutline />
              </Link>
              <button
                onClick={() => dispatch(clearCart())}
                className="clearCart c-hBtn"
              >
                <MdOutlineDeleteOutline />
              </button>
            </div>
            <h3>
              Total: $
              <span>
                {cartItems.reduce(
                  (acc, item) => acc + Math.round(item.price) * item.quantity,
                  0,
                )}
              </span>
            </h3>
          </div>
        )}
      </CartParent>
    </>
  );
}
const Empty = styled.h2`
  text-align: center;
  font-family: "Poppins", sans-serif;
  margin-top: 100px;
  font-size: 40px;
  letter-spacing: 8px;
  font-weight: 500;
  color: red;
  padding: 20px;
  border-radius: 5px;

  @media screen and (max-width: 750px) {
    font-size: 25px;
  }
`;
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
    @media screen and (max-width: 990px) {
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      text-align: center;
    }
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

    @media screen and (max-width: 990px) {
      padding: 15px 25px;
      justify-content: center;
      flex-wrap: wrap;
      gap: 30px;
    }

    .img-title {
      display: flex;
      align-items: center;
      column-gap: 22px;
      @media screen and (max-width: 450px) {
        text-align: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
      }
      img {
        width: 50px;
        height: 50px;
      }

      span {
        font-size: 16px;
        font-weight: 400;
        @media screen and (max-width: 1100px) {
          font-size: 14px;
        }
      }
    }

    .price {
      @media screen and (max-width: 1100px) {
        font-size: 14px;
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

        @media screen and (max-width: 1100px) {
          width: 20;
          height: 25px;
          font-size: 14px;
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

        @media screen and (max-width: 1100px) {
          width: 35px;
          height: 25px;
          font-size: 14px;
        }
      }
    }

    .subtotal {
      @media screen and (max-width: 1100px) {
        font-size: 14px;
      }
    }
  }

  .options {
    box-sizing: border-box;
    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.207);
    border-radius: 4px;
    width: 300px;
    padding: 24px;
    @media screen and (max-width: 350px) {
      padding: 20px;
      width: 100%;
    }
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
        &:hover {
          transform: scale(1.1);
        }

        @media screen and (max-width: 350px) {
          font-size: 25px;
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
      @media screen and (max-width: 350px) {
        font-size: 17px;
      }
    }
  }
`;
