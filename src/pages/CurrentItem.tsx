import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../redux/Data";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import styled from "styled-components";
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { addToCart } from "../redux/Cart";

export default function CurrentItem() {
  const { id } = useParams();

  const { products } = useSelector((state: RootState) => state.data);
  const cartData = useSelector((state: RootState) => state.cartData);

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
            <MdOutlineShoppingCart /> Add To Cart
          </button>

          <button className="wishlistBtn">
            <IoHeartOutline />
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
  .itemImages {
    display: flex;
    align-items: center;
    column-gap: 30px;

    .smallImagesPar {
      display: flex;
      flex-direction: column;
      row-gap: 16px;

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
      }
    }
  }
`;
