import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { fetchProducts } from "../redux/Data";
import styled from "styled-components";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function TopSlider() {
  const { products } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let filteredProduct = products.filter(
    (item) => item.id > 90 && item.id <= 95,
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleRight = () => {
    if (currentIndex < filteredProduct.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handlePagination = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <SliderPar>
        <AnimatePresence mode="wait">
          {filteredProduct.map((item, index) => {
            return (
              currentIndex === index && (
                <motion.div
                  key={item.id}
                  className="slider"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={item.images[0]} alt="product image" />
                </motion.div>
              )
            );
          })}
        </AnimatePresence>

        <button className="left" onClick={handleLeft}>
          <FaArrowLeft />
        </button>
        <button className="right" onClick={handleRight}>
          <FaArrowRight />
        </button>

        <PaginationPar>
          {filteredProduct.map((item, index) => {
            return (
              <span
                key={item.id}
                onClick={() => handlePagination(index)}
                className={currentIndex === index ? "active" : ""}
              ></span>
            );
          })}
        </PaginationPar>
      </SliderPar>
    </>
  );
}

const PaginationPar = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 10px;
  bottom: 0;

  span {
    height: 6px;
    width: 6px;
    border-radius: 5px;
    background-color: black;
    cursor: pointer;
  }

  .active {
    background-color: #949494;
    outline: 2px solid #949494;
  }
`;

const SliderPar = styled.div`
  position: relative;
  width: 70%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media screen and (max-width: 1050px) {
    width: 100%;
  }
  .slider {
    width: 50%;
    height: 100%;
    position: absolute;

    @media screen and (max-width: 1050px) {
      width: 60%;
    }

    @media screen and (max-width: 800) {
      width: 80%;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  button {
    background-color: transparent;
    font-size: 23px;
    border: none;
    cursor: pointer;
    position: absolute;
  }

  .left {
    top: 50%;
    left: 10px;
    transform: translateY(-50%);

    @media screen and (max-width: 1050px) {
      left: 8px;
    }
  }

  .right {
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    @media screen and (max-width: 1050px) {
      right: 0px;
    }
  }
`;

export default TopSlider;
