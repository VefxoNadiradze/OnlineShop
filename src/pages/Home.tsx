import { styled } from 'styled-components'
import Categories from '../components/Categories'

export default function Home() {
  return (
    <CategoryCarousel>
      <Categories/>
    </CategoryCarousel>
  )
}

const CategoryCarousel = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`
