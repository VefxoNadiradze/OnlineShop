import { styled } from 'styled-components'
import Categories from '../components/Categories'
import TopSlider from '../components/TopSlider'

export default function Home() {
  return (
    <CategoryCarousel>
      <Categories/>
      <TopSlider/>
    </CategoryCarousel>
  )
}

const CategoryCarousel = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`
