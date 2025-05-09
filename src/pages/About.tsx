import styled from "styled-components";
import img from "/storyImg.png";
import { BsShop } from "react-icons/bs";
import { LuDollarSign } from "react-icons/lu";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";

export default function About() {
  const cardTexts = [
    {
      icon: <BsShop />,
      number: "10.5K",
      description: "Sallers active our site",
    },
    {
      icon: <LuDollarSign />,
      number: "33k",
      description: "Mopnthly Produduct Sale",
    },
    {
      icon: <MdOutlineShoppingBag />,
      number: "45.5K",
      description: "Customer active in our site",
    },
    {
      icon: <FaSackDollar />,
      number: "25k",
      description: "Anual gross sale in our site",
    },
  ];
  return (
    <AboutParent>
      <div className="ourStory">
        <div className="textImgPar">
          <div className="storyText">
            <h3>Our Story</h3>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
          </div>

          <img src={img} alt="" />
        </div>
      </div>

      <div className="cardsParent">
        {cardTexts.map((item) => {
          return (
            <div className="card">
              <span>{item.icon}</span>

              <div className="texts">
                <h3>{item.number}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </AboutParent>
  );
}

const AboutParent = styled.div`
  .ourStory {
    margin-top: 42px;
    height: 609px;
    @media screen and (max-width: 1100px) {
      height: auto;
    }
    .textImgPar {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 77px;
      @media screen and (max-width: 1200px) {
        gap: 70px;
      }

      @media screen and (max-width: 1100px) {
        position: static;
        flex-direction: column;
        gap: 50px;
      }
      .storyText {
        @media screen and (max-width: 1100px) {
          text-align: center;
        }
        h3 {
          color: rgb(0, 0, 0);
          font-family: "Inter", sans-serif;
          font-size: 54px;
          font-weight: 600;
          line-height: 64px;
          letter-spacing: 6%;
          margin-bottom: 40px;
          @media screen and (max-width: 1200px) {
            font-size: 43px;
            margin-bottom: 30px;
          }
          @media screen and (max-width: 670px) {
            font-size: 30px;
            margin-bottom: 10px;
          }
        }

        p {
          color: rgb(0, 0, 0);
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 26px;
          @media screen and (max-width: 1200px) {
            font-size: 14px;
          }
          @media screen and (max-width: 670px) {
            font-size: 12px;
            line-height: 18px;
          }
        }
      }

      img {
        width: 737px;
        height: 519px;
        object-fit: cover;

        @media screen and (max-width: 1200px) {
          width: 637px;
          height: 419px;
        }
        @media screen and (max-width: 670px) {
          width: 437px;
          height: 319px;
          object-fit: contain;
        }

        @media screen and (max-width: 460px) {
          width: 283px;
          height: 200px;
        }
      }
    }
  }

  .cardsParent {
    margin-top: 77px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 34px;

    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
    }
    @media screen and (max-width: 670px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
    .card {
      text-align: center;
      box-sizing: border-box;
      border: 1px solid rgba(0, 0, 0, 0.3);
      padding: 30px 23px;
      border-radius: 4px;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background: rgb(0, 0, 0);
        color: rgb(250, 250, 250);
        font-size: 27px;
        @media screen and (max-width: 670px) {
          width: 48px;
          height: 48px;
          font-size: 20px;
        }
      }

      .texts {
        margin-top: 24px;
        color: rgb(0, 0, 0);

        h3 {
          font-family: "Inter", sans-serif;
          font-size: 32px;
          font-weight: 700;
          line-height: 30px;
          letter-spacing: 4%;
          @media screen and (max-width: 670px) {
            font-size: 22px;
          }
        }

        p {
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          margin-top: 12px;
          @media screen and (max-width: 670px) {
            font-size: 14px;
          }
        }
      }
    }
  }
`;
