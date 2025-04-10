import { useEffect } from "react";
import { fetchProducts } from "../redux/Data";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import styled from "styled-components";

export default function Temporary() {
  const { products } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let filterBestSellingProducts = products.filter((item) => item.id === 100);

  return (
    <>
      {filterBestSellingProducts.map((item) => {
        return (
          <TemporaryPar key={item.id}>
            <div className="description">
              <p>Categories</p>
              <h2>Enhance Your Music Experience</h2>

              <div className="time">
                <div>
                  23 <span>Hours</span>
                </div>
                <div>
                  59 <span>Minutes</span>
                </div>
                <div>
                  35 <span>Seconds</span>
                </div>
              </div>

              <button>Buy Now!</button>
            </div>
            <img src={item.images[0]} alt="product img" />
          </TemporaryPar>
        );
      })}
    </>
  );
}

const TemporaryPar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 69px 59px 69px 59px;
  margin-top: 140px;
  background: rgb(0, 0, 0);
  border-radius: 5px;

  @media screen and (max-width: 570px) {
    flex-direction: column;
    padding: 69px 39px 69px 39px;
  }

  .description {
    p {
      color: rgb(0, 255, 102);
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-weight: 600;
      @media screen and (max-width: 1150px) {
        font-size: 14px;
      }

      @media screen and (max-width: 720px) {
        font-size: 12px;
      }
    }

    h2 {
      color: rgb(250, 250, 250);
      font-family: "Inter", sans-serif;
      font-size: 48px;
      font-weight: 600;
      line-height: 60px;
      letter-spacing: 4%;
      margin: 38px 0;

      @media screen and (max-width: 1150px) {
        font-size: 31px;
      }

      @media screen and (max-width: 720px) {
        font-size: 23px;
      }
      @media screen and (max-width: 570px) {
        margin: 27px 0;
      }
    }

    .time {
      display: flex;
      align-items: center;
      gap: 24px;
      margin-bottom: 40px;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 62px;
        height: 62px;
        background: rgb(255, 255, 255);
        border-radius: 50%;
        color: rgb(0, 0, 0);
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        font-weight: 600;

        @media screen and (max-width: 1150px) {
          width: 51px;
          height: 51px;
          font-size: 12px;
          font-weight: 400;
        }

        @media screen and (max-width: 720px) {
          width: 49px;
          height: 49px;
        }

        span {
          color: rgb(0, 0, 0);
          font-family: "Poppins", sans-serif;
          font-size: 11px;
          font-weight: 400;
          line-height: 18px;
        }
      }
    }

    button {
      border-radius: 4px;
      background: rgb(0, 255, 102);
      padding: 16px 48px 16px 48px;
      width: 171px;
      height: 56px;
      color: rgb(250, 250, 250);
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      @media screen and (max-width: 1150px) {
        width: 151px;
        height: 50px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        padding: 0 48px 0 48px;
      }
    }
  }

  img {
    height: 400px;

    @media screen and (max-width: 1150px) {
      height: 300px;
    }

    @media screen and (max-width: 910px) {
      height: 280px;
    }

    @media screen and (max-width: 570px) {
      height: 100%
    }
  }
`;
