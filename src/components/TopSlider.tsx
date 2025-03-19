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

  let filteredProduct = products.filter(item => item.id > 90 && item.id <= 100);
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
      </SliderPar>
    </>
  );
}

const SliderPar = styled.div`
  position: relative;
  width: 70%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .slider {
    width: 50%;
    height: 100%;
    position: absolute;
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
  }
  
  .right {
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
`;

export default TopSlider;
