import { useEffect } from "react";
import { fetchProducts } from "../redux/Data";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import styled from "styled-components";
import { FaCheck, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { addToCart } from "../redux/Cart";

export default function Explore() {
  const { products } = useSelector((state: RootState) => state.data);
  const cartData = useSelector((state: RootState) => state.cartData);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let filterBestSellingProducts = products.filter(
    (item) => item.id > 78 && item.id <= 86,
  );

  const starsArr = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];
  const addCart = (id: number) => {
    let item = products.find((item) => item.id === id);

    item && dispatch(addToCart(item));
  };
  return (
    <>
      <ExploreHeader>
        <h2>Explore Our Products</h2>
      </ExploreHeader>
      <ExplorePar>
        {filterBestSellingProducts.map((item) => {
          return (
            <div key={item.id}>
              <div className="imgPar">
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
                  {cartData.find((cartitem) => item.id === cartitem.id) ? (
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
      </ExplorePar>

      <ViewButtonParent>
        <Link to={"/Explore"} className="viewButton">
          View All Products
        </Link>
      </ViewButtonParent>
    </>
  );
}

const ViewButtonParent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .viewButton {
    text-decoration: none;
    display: block;
    margin: 0 auto;
    color: rgb(250, 250, 250);
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    border-radius: 4px;
    background: rgb(219, 68, 68);
    padding: 16px 48px 16px 48px;
    border: none;
    cursor: pointer;
    margin-top: 88px;

    @media screen and (max-width: 958px) {
      font-size: 14px;
      padding: 14px 44px 14px 44px;
    }

    @media screen and (max-width: 558px) {
      font-size: 13px;
      padding: 11px 32px 11px 32px;
    }
  }
`;

const ExploreHeader = styled.div`
  margin-top: 131px;

  h2 {
    font-family: "Inter", sans-serif;
    font-size: 32px;
    font-weight: 600;

    @media screen and (max-width: 958px) {
      font-size: 25px;
    }

    @media screen and (max-width: 558px) {
      font-size: 21px;
    }
  }
`;

const ExplorePar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  border-radius: 5px;
  margin-top: 60px;

  @media screen and (max-width: 958px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .imgPar {
    position: relative;
    background: rgb(245, 245, 245);
    border-radius: 5px;
    width: 100%;
    overflow: hidden;

    img {
      width: 100%;
      transition: 0.5s ease;

      &:hover {
        transform: scale(1.1);
      }
    }

    &:hover .cartBtn {
      bottom: 0;
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
