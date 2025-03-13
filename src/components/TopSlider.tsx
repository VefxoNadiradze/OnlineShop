import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'


import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/Data";
import styled from "styled-components";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";



export default function TopSlider() {
  const { products } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let filteredProducts = products.filter(product => product.id > 90 && product.id < 98)
  return (
    <SwiperContainer>
      <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}

      >
        {filteredProducts.map((product) => (
          <Slide key={product.id}>
            <Image src={product.images[0]} alt="product image" />
          </Slide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
}


const SwiperContainer = styled.div`
  width: 100%;
  max-width: 800px; 
  margin: auto;
  overflow: hidden;

`;

const Slide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
  height: 450px; 
  object-fit: contain; 
  border-radius: 10px;
`;