import { useEffect } from "react";
import { RootState,AppDispatch } from "../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../redux/Data";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Categories() {
     const {products} = useSelector((state: RootState) => state.data);
     const dispatch  = useDispatch<AppDispatch>();

     useEffect(() => {
        dispatch(fetchProducts())
     }, [])

     const uniqueCategories = Array.from(new Set(products.map(item => item.category)));


  return (
    <CategoriesDiv>
        {
            uniqueCategories.map((category,index) => {
                return <Link  to={`/Products/${category}`} key={index}>{category}</Link>
            })
        }
    </CategoriesDiv>
  )
}


const CategoriesDiv = styled.div`
   display: flex;
   flex-direction: column;
   padding: 39.75px;

   border-right: 0.5px solid rgb(0, 0, 0);
   gap: 16px;

   a{
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    color: rgb(0, 0, 0);
   }

`
