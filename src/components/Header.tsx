import { Link } from "react-router-dom";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Header() {
    let cartItems = useSelector((state: RootState) => state.cartData);
  return (
    <HeaderStyles>
      <nav>
        <Link to={"/"}>Online Shop</Link>
        <ul>
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
        <form>
          <input type="text" placeholder="What are you looking for?" />
          <span>
            <CiSearch />
          </span>
        </form>
        <Link to={"/Wishlist"}>
          <FaRegHeart />
        </Link>

        <Link className="cartIcon" to={"/Cart"}>
        {cartItems.length > 0 &&  <span>{cartItems.length}</span>}
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

  nav {
    display: flex;
    column-gap: 190px;

    a {
      text-decoration: none;
      color: rgb(0, 0, 0);
      font-family: "Inter", sans-serif;
      font-size: 24px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 3%;
    }

    ul {
      display: flex;
      column-gap: 48px;
      list-style: none;

      li {
        a {
          text-decoration: none;
          color: rgb(0, 0, 0);
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
      }
    }
  }

  .user-actions {
    display: flex;
    align-items: center;
    column-gap: 24px;
    form {
      position: relative;
      width: 243px;
      height: 38px;
      span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 12px;
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
    }

    .ProfileButton {
      background-color: transparent;
      border: none;
      font-size: 32px;
      color: rgb(219, 68, 68);
      cursor: pointer;
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
        padding:5px;
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
