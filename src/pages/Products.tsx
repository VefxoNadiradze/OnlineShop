import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../redux/Data";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import styled from "styled-components";
import { MdOutlineShoppingCart } from "react-icons/md";
import { addToCart } from "../redux/Cart";
import { FaStar } from "react-icons/fa";

export default function Products() {
  const { category } = useParams();
  const { products } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const CategoryItems = products.filter((item) => item.category === category);
  const starsArr = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];

  const addCart = (id: number) => {
    let item = products.find((item) => item.id === id);

    item && dispatch(addToCart(item));
  };
  return (
    <CategoryParent>
      {CategoryItems.map((item) => {
        return (
          <div key={item.id}>
            <div className="imgPar">
              <Link to={`/Item/${item.id}`}>
                <img src={item.images[0]} alt="" />
              </Link>

              <AddCartBtn onClick={() => addCart(item.id)} className="cartBtn">
                <MdOutlineShoppingCart /> Add To Cart
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
    </CategoryParent>
  );
}

const CategoryParent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  border-radius: 5px;
  margin-top: 60px;

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
`;
