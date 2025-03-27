import { useEffect } from "react";
import { fetchProducts } from "../redux/Data";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export default function Explore() {
    const { products } = useSelector((state: RootState) => state.data);
    const dispatch = useDispatch<AppDispatch>();
 
     useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);

  let filterBestSellingProducts = products.filter(item =>  item.id > 78 && item.id <= 86 );

    const starsArr = [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar /> ]
  
  return (
    <>
       <ExploreHeader>
        <h2>Best Selling Products</h2>
      </ExploreHeader>
    <ExplorePar>   
        {
           filterBestSellingProducts.map(item => {
            return <div key={item.id}>
                <div className="imgPar">
                 <img src={item.images[0]} alt="" />
                </div>

                <div className="description">
                   <p className="title">{item.title}</p>
                   <p className="price">$ <span>{Math.round(item.price)}</span></p>

                  <div className="starsParent">
                   {
                     starsArr.map((star,index) => {
                        return <span className={index <  item.rating ? "yellow" : "stars"}>{star}</span>
                     })
                   }
                   </div>
            

                </div>
            </div>
         })
        }
    </ExplorePar>

     <ViewButton className="viewBtn">View All Products</ViewButton>
    </>
  )
}

const ViewButton = styled.button`
    display: block;
    margin: 0 auto;
    color: rgb(250, 250, 250);
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    border-radius: 4px;
    background: rgb(219, 68, 68);
    padding: 16px 48px 16px 48px;
    border: none;
    cursor: pointer;
    margin-top: 88px;
`


const ExploreHeader = styled.div`
   margin-top: 131px;

   h2{
    font-family: "Inter",  sans-serif;
    font-size: 32px;
    font-weight: 600;
   }


`

const ExplorePar = styled.div`
   display: grid;
   grid-template-columns: repeat(4,1fr);
   gap: 30px;
   border-radius: 5px;
   margin-top: 60px;

   
   .imgPar{
      background: rgb(245, 245, 245);
      border-radius: 5px;
      width: 100%;

     img{
       width: 100%;
     }
  }

  .description{
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 16px;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;



    .starsParent{
      display: flex;
      gap: 10px;
       .yellow{
           color: rgb(255, 173, 51);;
       }
   }
  }
`
