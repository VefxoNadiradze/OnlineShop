import { styled } from 'styled-components'
import Categories from '../components/Categories'
import TopSlider from '../components/TopSlider'
import BestSelling from '../components/BestSelling'

export default function Home() {
  return (
    <>
    <CategoryCarousel>
      <Categories/>
      <TopSlider/>
    </CategoryCarousel>
      <BestSelling/>
      </>
  )
}

const CategoryCarousel = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
`
