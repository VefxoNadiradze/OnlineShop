import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { FaCheck, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/Cart";
import { MdOutlineShoppingCart } from "react-icons/md";
import { styled } from "styled-components";
import { FaTrash } from "react-icons/fa6";
import { removeCurrentItem } from "../redux/wishlist";

export default function Wishlist() {
  const wishlistData = useSelector((state: RootState) => state.wishlistData);
  const dispatch = useDispatch<AppDispatch>();
  const cartData = useSelector((state: RootState) => state.cartData);

  const starsArr = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];
  const addCart = (id: number) => {
    let item = wishlistData.find((item) => item.id === id);

    item && dispatch(addToCart(item));
  };
  return (
    <>
      {wishlistData.length < 1 && (
        <Empty className="emptyWishlist">Your Wishlist is Empty</Empty>
      )}
      <WishlistPar>
        {wishlistData.map((item) => {
          return (
            <div key={item.id}>
              <div className="imgPar">
                <button
                  onClick={() => dispatch(removeCurrentItem(item.id))}
                  className="removeWishlist"
                >
                  <FaTrash />
                </button>
                <Link to={`/Item/${item.id}`}>
                  <img src={item.images[0]} alt="" />
                </Link>
                <AddCartBtn
                  onClick={() =>
                    cartData.find((cartitem) => item.id === cartitem.id)
                      ? null
                      : addCart(item.id)
                  }
                  className="cartBtn"
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
                </AddCartBtn>
              </div>

              <div className="description">
                <p className="title">{item.title}</p>
                <p className="price">
                  $ <span>{Math.round(item.price)}</span>
                </p>

                <div className="starsParent">
                  {starsArr.map((star, index) => {
                    return (
                      <span
                        key={index}
                        className={index < item.rating ? "yellow" : "stars"}
                      >
                        {star}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </WishlistPar>
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

const WishlistPar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  border-radius: 5px;
  margin-top: 60px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 970px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .imgPar {
    position: relative;
    background: rgb(245, 245, 245);
    border-radius: 5px;
    width: 100%;
    height: 300px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      transition: 0.5s ease;
      object-fit: contain;
      &:hover {
        transform: scale(1.1);
      }
    }

    &:hover .cartBtn {
      bottom: 0;
    }

    .removeWishlist {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 3;
      background-color: transparent;
      border: none;
      cursor: pointer;
      font-size: 15px;
      transition: 0.5s ease;
      opacity: 0;

      @media screen and (max-width: 1000px) {
        opacity: 1;
      }
    }

    &:hover .removeWishlist {
      opacity: 1;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 16px;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;

    .starsParent {
      display: flex;
      gap: 10px;
      .yellow {
        color: rgb(255, 173, 51);
      }
    }
  }
`;

const AddCartBtn = styled.button`
  position: absolute;
  bottom: -100%;
  left: 0;
  transition: 0.5s ease;
  width: 100%;
  border-radius: 0px 0px 4px 4px;
  background: rgb(0, 0, 0);
  height: 41px;
  color: rgb(255, 255, 255);
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  cursor: pointer;
  border: none;

  &:hover {
    color: rgb(0, 0, 0);
    background: rgb(255, 255, 255);
  }

  @media screen and (max-width: 1000px) {
    bottom: 0%;
    line-height: 10px;
    height: 33px;
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
`;
