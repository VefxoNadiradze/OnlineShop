import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../redux/Data";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import styled from "styled-components";
import { MdOutlineShoppingCart } from "react-icons/md";
import { addToCart } from "../redux/Cart";
import { FaCheck, FaStar } from "react-icons/fa";
import FilterComponent from "../components/FilterComponent";

export default function Products() {
  const { category } = useParams();
  const { products } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch<AppDispatch>();
  const [Products, setProduct] = useState<Product[]>();
  const [searchText, setSearchText] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === category,
    );
    setProduct(filteredProducts);
  }, [category, products]);
  const cartData = useSelector((state: RootState) => state.cartData);

  const starsArr = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];

  const addCart = (id: number) => {
    let item = products.find((item) => item.id === id);

    item && dispatch(addToCart(item));
  };

  const applyFilters = (
    search: string,
    price: { min: string; max: string },
  ) => {
    const filtered = products.filter((item) => {
      const matchCategory = item.category === category;
      const matchTitle = item.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchPrice =
        (price.min === "" || item.price >= Number(price.min)) &&
        (price.max === "" || item.price <= Number(price.max));

      return matchCategory && matchTitle && matchPrice;
    });

    setProduct(filtered);
  };

  const FilterProduct = (value: string) => {
    setSearchText(value);
    applyFilters(value, priceRange);
  };
  const FilterPrice = (value: { min: string; max: string }) => {
    setPriceRange(value);
    applyFilters(searchText, value);
  };



  const SortProducts = (value: string) => {

    Products &&
      Products.sort((a, b) => {
        if (value === "High to Low") {
          return b.price - a.price;
        } else if (value === "Low to High") {
          return a.price - b.price;
        } else if (value === "A-Z") {
          return a.title.localeCompare(b.title);
        } else if (value === "Z-A") {
          return b.title.localeCompare(a.title);
        }
        return 0;
      });
    setProduct(Products ? [...Products] : []);
  };


  return (
    <>
      <FilterComponent
        sortedProducts={SortProducts}
        filterPrice={FilterPrice}
        filterFoo={FilterProduct}
      />
      {Products?.length === 0 && <FilterError> No Products Found</FilterError>}
      <CategoryParent>
        {Products &&
          Products.map((item) => {
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
      </CategoryParent>
    </>
  );
}

const FilterError = styled.h2`
  color: red;
  text-align: center;
  font-size: 35px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  margin-top: 110px;
`;

const CategoryParent = styled.div`
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
