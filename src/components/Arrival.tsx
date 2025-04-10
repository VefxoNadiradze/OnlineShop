import { styled } from "styled-components";
import { fetchProducts } from "../redux/Data";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { Link } from "react-router-dom";
import serviceBackground from "/Ellipse 5.png";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerServiceLine } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";

export default function Arrival() {
  const { products } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let filterBestSellingProducts = products.filter(
    (item) => item.id > 78 && item.id <= 82,
  );
  return (
    <>
      <ArrivalHeader>
        <h2>New Arrival</h2>
      </ArrivalHeader>

      <ArrivalPar>
        {filterBestSellingProducts.map((item) => {
          return (
            <div key={item.id} className="arrivalItem">
              <div className="arrivalDescription">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={"/"}>Shop Now</Link>
              </div>

              <img src={item.images[2]} alt="arrival img" />
            </div>
          );
        })}
      </ArrivalPar>

      <Services>
        <div className="serviceCard">
          <div className="serviceIconPar">
            <img src={serviceBackground} alt="" />
            <span className="icon">
              <CiDeliveryTruck />
            </span>
          </div>

          <div className="serviceDescription">
            <h3>FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over $140</p>
          </div>
        </div>

        <div className="serviceCard">
          <div className="serviceIconPar">
            <img src={serviceBackground} alt="" />
            <span className="icon">
              <RiCustomerServiceLine />
            </span>
          </div>

          <div className="serviceDescription">
            <h3>24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
          </div>
        </div>

        <div className="serviceCard">
          <div className="serviceIconPar">
            <img src={serviceBackground} alt="" />
            <span className="icon">
              <SiAdguard />
            </span>
          </div>

          <div className="serviceDescription">
            <h3>MONEY BACK GUARANTEE</h3>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </Services>
    </>
  );
}

const Services = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 140px;

  @media screen and (max-width: 1140px) {
    flex-direction: column;
    gap: 70px;
  }

  .serviceCard {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .serviceIconPar {
      position: relative;

      .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 25px;
      }
    }

    .serviceDescription {
      margin-top: 25px;
      text-align: center;

      h3 {
        color: rgb(0, 0, 0);
        font-family: "Poppins", sans-serif;
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;

        @media screen and (max-width: 390px) {
           font-size: 17px;
        }
      }

      p {
        color: rgb(0, 0, 0);
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;

        @media screen and (max-width: 390px) {
           font-size: 12px;
        }
      }
    }
  }
`;

const ArrivalHeader = styled.div`
  margin-top: 131px;

  h2 {
    font-family: "Inter", sans-serif;
    font-size: 32px;
    font-weight: 600;

    @media screen and (max-width: 958px) {
      font-size: 25px;
    }

    @media screen and (max-width: 558px) {
      font-size: 21px;
    }
  }
`;

const ArrivalPar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 300px;
  gap: 30px;
  margin-top: 60px;

  @media screen and (max-width: 1190px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
  }
  .arrivalItem {
    position: relative;
    border-radius: 4px;
    background: rgb(0, 0, 0);
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }

    .arrivalDescription {
      position: absolute;
      bottom: 32px;
      left: 32px;
      color: rgb(250, 250, 250);
      display: flex;
      flex-direction: column;
      gap: 15px;
      @media screen and (max-width: 1300px) {
        gap: 10px;
      }
      h3 {
        font-family: "Inter", sans-serif;
        font-size: 16px;
        font-weight: 600;
        @media screen and (max-width: 1300px) {
          font-size: 14px;
          font-weight: 500;
        }
      }
      p {
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 21px;

        @media screen and (max-width: 1300px) {
          line-height: 16px;
        }
      }
      a {
        color: rgb(255, 255, 255);
        font-family: Poppins;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        @media screen and (max-width: 1300px) {
          font-size: 15px;
          line-height: 16px;
        }
      }
    }
  }

  .arrivalItem:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1/3;

    @media screen and (max-width: 1190px) {
      grid-column: 1 / 2;
      grid-row: 1/2;
    }
  }

  .arrivalItem:nth-child(2) {
    grid-column: 3/-1;
    @media screen and (max-width: 1190px) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
  }
`;
