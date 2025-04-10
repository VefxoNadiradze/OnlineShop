import { useEffect, useState } from "react";
import { RootState, AppDispatch } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/Data";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Categories() {
  const { products } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const uniqueCategories = Array.from(
    new Set(products.map((item) => item.category)),
  );

  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  return (
    <>
      <Hamburger
        onClick={() => setActiveMenu(!activeMenu)}
        className="hamburger"
      >
        <GiHamburgerMenu />
      </Hamburger>
      <CategoriesDiv className={activeMenu ? "active" : ""}>
        {uniqueCategories.map((category, index) => {
          return (
            <Link to={`/Products/${category}`} key={index}>
              {category}
            </Link>
          );
        })}
      </CategoriesDiv>
    </>
  );
}

const CategoriesDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 39.75px;
  border-right: 0.5px solid rgb(0, 0, 0);
  gap: 16px;

  @media screen and (max-width: 1050px) {
    display: none;
    height: 100vh;
  }

  &&.active {
    display: flex;
    position: absolute;
    left: 0;
    top: 110px;
    border-right: none;
    background: white;
    z-index: 1;
  }

  a {
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    color: rgb(0, 0, 0);
  }
`;

const Hamburger = styled.button`
  position: absolute;
  top: 100px;
  left: 50px;
  background: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  background-color: white;
  z-index: 5;
  display: none;

  @media screen and (max-width: 1050px) {
    display: block;
  }
  @media screen and (max-width: 390px) {
    top: 110px;
  }
`;
