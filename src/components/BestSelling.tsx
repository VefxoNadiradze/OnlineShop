import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import styled from "styled-components"
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchProducts } from "../redux/Data";
import { FaStar } from "react-icons/fa";

export default function BestSelling() {
   const { products } = useSelector((state: RootState) => state.data);
   const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
       dispatch(fetchProducts());
     }, [dispatch]);

  let filterBestSellingProducts = products.filter(item => item.id > 10 && item.id <= 15);

  const starsArr = [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar /> ]



  return (
   <>
     <SellingHeader>
        <h2>Best Selling Products</h2>

        <Link to={'/'}>View All</Link>
     </SellingHeader>

     <BestSellingProducts>
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
     </BestSellingProducts>
     </>
  )
}




const SellingHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 165px;

   h2{
    font-family: "Inter",  sans-serif;
    font-size: 32px;
    font-weight: 600;
   }

   a{
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    background: rgb(219, 68, 68);
    font-size: 16px;
    font-weight: 500;
    padding: 16px 48px 16px 48px;
    border-radius: 5px;
    color: rgb(250, 250, 250);
   }
`

const BestSellingProducts = styled.div`
   display: flex;
   align-items: center;
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