import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../redux/Data";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import styled from "styled-components";
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { addToCart } from "../redux/Cart";
import { addToWishlist } from "../redux/wishlist";
import { FaCheck, FaHeart } from "react-icons/fa";

export default function CurrentItem() {
  const { id } = useParams();

  const { products } = useSelector((state: RootState) => state.data);
  const cartData = useSelector((state: RootState) => state.cartData);
  const wishlistData = useSelector((state: RootState) => state.wishlistData);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const item = products.find((item) => item.id === Number(id));
  const [currentImg, setCurrentImg] = useState<string | null>();

  const addCart = (id: number | undefined) => {
    let item = products.find((item) => item.id === id);

    item && dispatch(addToCart(item));
  };

  const addWishlist = (id: number | undefined) => {
    let item = products.find((item) => item.id === id);

    item && dispatch(addToWishlist(item));
  };
  return (
    <ItemParent>
      <div className="itemImages">
        <div className="smallImagesPar">
          {item?.images.map((smallImg, index) => {
            return (
              <div
                key={index}
                onClick={() => setCurrentImg(smallImg)}
                className="smallImage"
              >
                <img src={smallImg} alt="" />
              </div>
            );
          })}
        </div>

        <div className="bigImage">
          <img src={currentImg ? currentImg : item?.images[0]} alt="" />
        </div>
      </div>

      <div className="description">
        <h2 className="title">{item?.title}</h2>
        <p className="price">
          $ <span>{item?.price}</span>
        </p>
        <p className="AboutItem">{item?.description}</p>
        <div className="addCart-wishlist">
          <button
            onClick={() =>
              cartData.find((cartitem) => item?.id === cartitem.id)
                ? null
                : addCart(item?.id)
            }
            className="addCart"
          >
            {cartData.find((cartitem) => item?.id === cartitem.id) ? (
              <span className=" AnimatedCartBtn">
                <FaCheck />
              </span>
            ) : (
              <p>
                <MdOutlineShoppingCart /> Add To Cart
              </p>
            )}
          </button>

          <button
            onClick={() =>
              wishlistData.find((wishlistItem) => item?.id === wishlistItem.id)
                ? null
                : addWishlist(item?.id)
            }
            className="wishlistBtn"
          >
            {wishlistData.find(
              (wishlistItem) => item?.id === wishlistItem.id,
            ) ? (
              <span className="AnimatedWishlistBtn">
                <FaHeart />
              </span>
            ) : (
              <IoHeartOutline />
            )}
          </button>
        </div>
      </div>
    </ItemParent>
  );
}

const ItemParent = styled.div`
  margin-top: 130px;
  display: flex;
  column-gap: 70px;

  @media screen and (max-width: 1300px) {
    column-gap: 20px;
  }

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    row-gap: 50px;
  }
  .itemImages {
    display: flex;
    align-items: center;
    column-gap: 30px;

    @media screen and (max-width: 1100px) {
      justify-content: center;
    }
    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
    .smallImagesPar {
      display: flex;
      flex-direction: column;
      row-gap: 16px;
      @media screen and (max-width: 900px) {
        flex-direction: row;
      }

      .smallImage {
        width: 170px;
        height: 138px;
        border-radius: 4px;
        background: rgb(245, 245, 245);
        cursor: pointer;

        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }

        @media screen and (max-width: 1300px) {
          width: 140px;
          height: 128px;
        }
        @media screen and (max-width: 1150px) {
          width: 130px;
          height: 118px;
        }

        @media screen and (max-width: 1100px) {
          width: 170px;
          height: 138px;
        }
        @media screen and (max-width: 900px) {
          width: 100%;
        }
      }
    }

    .bigImage {
      width: 500px;
      height: 600px;
      border-radius: 4px;
      background: rgb(245, 245, 245);
      img {
        height: 100%;
        width: 100%;
      }

      @media screen and (max-width: 1300px) {
        width: 400px;
        height: 500px;
      }

      @media screen and (max-width: 1150px) {
        width: 350px;
        height: 400px;
      }
      @media screen and (max-width: 1100px) {
        width: 500px;
        height: 600px;
      }
      @media screen and (max-width: 900px) {
        width: 100%;
      }

      @media screen and (max-width: 550px) {
        height: 450px;
      }

      @media screen and (max-width: 400px) {
        height: 400px;
      }
    }
  }

  .description {
    .title {
      color: rgb(0, 0, 0);
      font-family: "Inter", sans-serif;
      font-size: 24px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 3%;
      margin-bottom: 16px;
    }

    .price {
      color: rgb(0, 0, 0);
      font-family: "Inter", sans-serif;
      font-size: 24px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 3%;
      margin-bottom: 24px;
    }

    .AboutItem {
      position: relative;
      color: rgb(0, 0, 0);
      font-family: "Poppins", sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      height: 87px;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        height: 1px;
        background: rgb(0, 0, 0);
      }
    }

    .addCart-wishlist {
      display: flex;
      margin-top: 25px;
      align-items: center;
      column-gap: 16px;

      .addCart {
        width: 165px;
        height: 44px;
        color: rgb(250, 250, 250);
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        border-radius: 4px;
        background: rgb(219, 68, 68);
        border: none;
        cursor: pointer;
      }
      .wishlistBtn {
        width: 40px;
        height: 40px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        font-size: 20px;
        color: rgb(0, 0, 0);
        cursor: pointer;

        .AnimatedWishlistBtn {
          display: block;
          animation: animate 1s ease forwards;

          @keyframes animate {
            0% {
              transform: scale(1);
            }
            30% {
              transform: scale(1.3);
              color: #ff0000;
            }
            50% {
              transform: scale(0.9);
              color: #ff0000;
            }
            70% {
              transform: scale(1.1);
              color: #ff0000;
            }
            100% {
              transform: scale(1);
              color: #ff0000;
            }
          }
        }
      }

      .AnimatedCartBtn {
        display: inline-block;
        animation: slideDown 0.3s ease forwards;
        font-size: 15px;

        @keyframes slideDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
            font-size: 15px;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
    }
  }
`;
