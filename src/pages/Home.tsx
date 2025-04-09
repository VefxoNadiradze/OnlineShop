import { styled } from "styled-components";
import Categories from "../components/Categories";
import TopSlider from "../components/TopSlider";
import BestSelling from "../components/BestSelling";
import Temporary from "../components/Temporary";
import Explore from "../components/Explore";
import Arrival from "../components/Arrival";

export default function Home() {
  return (
    <>
      <CategoryCarousel>
        <Categories />
        <TopSlider />
      </CategoryCarousel>
      <BestSelling />
      <Temporary />
      <Explore />
      <Arrival />
    </>
  );
}

const CategoryCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
