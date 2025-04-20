import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import {  useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RootState } from "../redux/store";



export default function Header() {
  let cartItems = useSelector((state: RootState) => state.cartData);
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const [activeSearch, setActiveSearch] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>("");
  const navigate = useNavigate()

  

  const SearchFoo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = productName.trim();
    if (trimmedName.length > 0) {
      navigate(`/search-products/${encodeURIComponent(trimmedName)}`);
    }
   
  };

  return (
    <HeaderStyles>
      <nav>
        <Link to={"/"}>Online Shop</Link>
        <button
          className="hamburger"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <GiHamburgerMenu />
        </button>
        <ul className={activeMenu ? "active" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>

          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>

      <div className="user-actions">
        <button
          className={
            activeSearch ? "activeSearch showHideInput" : "showHideInput"
          }
          onClick={() => setActiveSearch(!activeSearch)}
        >
          {activeSearch ? <IoMdClose /> : <CiSearch />}
        </button>
        <form
          onSubmit={(event) => SearchFoo(event)}
          className={activeSearch ? "activeForm" : ""}
        >
          <input
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            placeholder="What are you looking for?"
          />
          <button type="submit">
            <CiSearch />
          </button>
        </form>
        <Link to={"/Wishlist"}>
          <FaRegHeart />
        </Link>

        <Link className="cartIcon" to={"/Cart"}>
          {cartItems.length > 0 && <span>{cartItems.length}</span>}
          <MdOutlineShoppingCart />
        </Link>

        <button className="ProfileButton">
          <FaUserCircle />
        </button>
      </div>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid rgb(0, 0, 0);
  padding: 24px 135px;

  @media screen and (max-width: 835px) {
    padding: 24px 70px !important;
  }

  @media screen and (max-width: 490px) {
    padding: 24px 20px !important;
  }

  @media screen and (max-width: 390px) {
    gap: 20px;
    flex-direction: column;
    padding: 10px 20px !important;
  }

  nav {
    position: relative;
    display: flex;
    column-gap: 190px;

    @media screen and (max-width: 1300px) {
      column-gap: 110px;
    }

    @media screen and (max-width: 1200px) {
      column-gap: 70px;
    }

    @media screen and (max-width: 1140px) {
      column-gap: 45px;
    }

    .hamburger {
      background-color: transparent;
      font-size: 25px;
      border: none;
      cursor: pointer;
      display: none;

      @media screen and (max-width: 992px) {
        display: block;
      }
    }

    a {
      text-decoration: none;
      color: rgb(0, 0, 0);
      font-family: "Inter", sans-serif;
      font-size: 24px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 3%;
      @media screen and (max-width: 1200px) {
        font-size: 20px !important;
      }

      @media screen and (max-width: 1140px) {
        font-size: 18px !important;
      }
    }
    ul {
      display: flex;
      column-gap: 48px;
      list-style: none;
      z-index: 13;

      @media screen and (max-width: 1200px) {
        column-gap: 23px;
      }

      @media screen and (max-width: 992px) {
        position: absolute;
        background-color: white;
        display: flex;
        flex-direction: column;
        left: 130px;
        top: 193%;
        column-gap: 0px;
        row-gap: 17px;
        overflow: hidden;
        height: 0;
        transition: 0.3s ease;
        padding: 0px 20px;

        &.active {
          position: absolute;
          left: 130px;
          top: 193%;
          height: 137px !important;
          padding: 15px 25px !important;
          box-shadow: 0px 0px 2px 0px rgb(0, 0, 0);
        }
      }
      @media screen and (max-width: 390px) {
        top: 160% !important;
        left: 65% !important;
      }

      li {
        a {
          text-decoration: none;
          color: rgb(0, 0, 0);
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;

          @media screen and (max-width: 1200px) {
            font-size: 14px !important;
          }

          @media screen and (max-width: 1140px) {
            font-size: 13px;
          }
          @media screen and (max-width: 992px) {
            font-size: 17px !important;
          }
        }
      }
    }
  }

  .user-actions {
    display: flex;
    align-items: center;
    column-gap: 24px;
    @media screen and (max-width: 1200px) {
      column-gap: 20px;
    }

    @media screen and (max-width: 1140px) {
      column-gap: 18px;
    }

    .activeSearch {
      position: absolute;
      left: 25px;
      @media screen and (max-width: 690px) {
        left: 18px;
      }

      @media screen and (max-width: 590px) {
        left: 10px;
      }
      @media screen and (max-width: 490px) {
        left: 92%;
        background: rgb(245, 245, 245) !important;
      }
    }

    .showHideInput {
      border: none;
      background-color: transparent;
      cursor: pointer;
      background: transparent;
      font-size: 23px;
      display: none;
      z-index: 10;

      @media screen and (max-width: 835px) {
        display: block;
      }
    }
    form {
      position: relative;
      width: 243px;
      height: 38px;

      @media screen and (max-width: 835px) {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 85%;
        z-index: 5;
        display: none;
        opacity: 0;

        animation: animate 0.5s ease forwards;
        &.activeForm {
          display: block;

          @keyframes animate {
            from {
              opacity: 0;
              transform: translate(-50%, -50%);
            }
            to {
              opacity: 1;
            }
          }
        }
      }
      @media screen and (max-width: 490px) {
        width: 100% !important;
      }
      button {
        position: absolute;
        top: 50%;
        font-size: 15px;
        border: none;
        cursor: pointer;
        transform: translateY(-50%);
        right: 12px;
        @media screen and (max-width: 490px) {
          display: none;
        }
      }
      input {
        border-radius: 4px;
        background: rgb(245, 245, 245);
        border: none;
        width: 100%;
        height: 100%;
        padding: 4px 20px;
        outline: none;
        font-family: "Poppins", sans-serif;
        font-weight: 400;

        &:placeholder {
          font-family: "Poppins", sans-serif;
          font-weight: 400;
        }
      }
    }

    a {
      font-size: 20px;

      @media screen and (max-width: 1200px) {
        font-size: 20px !important;
      }

      @media screen and (max-width: 1140px) {
        font-size: 18px !important;
      }
    }

    .ProfileButton {
      background-color: transparent;
      border: none;
      font-size: 32px;
      color: rgb(219, 68, 68);
      cursor: pointer;

      @media screen and (max-width: 1200px) {
        font-size: 28px !important;
      }

      @media screen and (max-width: 1140px) {
        font-size: 25px !important;
      }
    }

    .cartIcon {
      position: relative;

      span {
        position: absolute;
        top: -13px;
        right: -10px;
        background-color: black;
        color: white;
        font-size: 12px;
        padding: 5px;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-family: "Poppins", sans-serif;
        font-weight: 300;
      }
    }
  }
`;
