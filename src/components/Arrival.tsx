import { styled } from "styled-components"
import { fetchProducts } from "../redux/Data";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { Link } from "react-router-dom";

export default function Arrival() {
  const { products } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);

let filterBestSellingProducts = products.filter(item =>  item.id > 78 && item.id <= 82 );
  return (
  <>
    <ArrivalHeader>
       <h2>New Arrival</h2>
    </ArrivalHeader>

    <ArrivalPar>
      {
        filterBestSellingProducts.map(item => {
          return <div className="arrivalItem">
              <div className="arrivalDescription">
                 <h3>{item.title}</h3>
                 <p>{item.description}</p>
                 <Link to={'/'}>Shop Now</Link>
              </div>

              <img src={item.images[2]} alt="arrival img" />
          </div>
        })
      }
    </ArrivalPar>
      
  </>
   
  )
}



const ArrivalHeader = styled.div`
   margin-top: 131px;

   h2{
     font-family: "Inter",  sans-serif;
     font-size: 32px;
     font-weight: 600;
    }
`

const ArrivalPar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 300px;
  gap: 30px;
  margin-top: 60px;

  .arrivalItem {
    position: relative;
    border-radius: 4px;
    background: rgb(0, 0, 0);
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }

    .arrivalDescription{
      position: absolute;
      bottom: 32px;
      left: 32px;
      color: rgb(250, 250, 250);
      display: flex;
      flex-direction: column;
      gap: 15px;


      h3{
        font-family: "Inter", sans-serif;
        font-size: 16px;
         font-weight: 600;
      }
      p{
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 21px;
      }
      a{
        color: rgb(255, 255, 255);
        font-family: Poppins;
         font-size: 16px;
        font-weight: 500;
        line-height: 24px;
      }
    }
  }

  .arrivalItem:nth-child(1) { /* Move :nth-child outside */
    grid-column: 1 / 3;
    grid-row: 1/3;
  }

  .arrivalItem:nth-child(2) { /* Move :nth-child outside */
    grid-column: 3/-1;

  }
`;
