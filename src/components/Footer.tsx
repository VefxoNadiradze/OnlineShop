import styled from "styled-components";
import { IoSend } from "react-icons/io5";

export default function Footer() {
  return (
    <FooterPar>
      <div className="exclusive footerItem">
        <h3>Exclusive</h3>
        <h4>Subscribe</h4>
        <p>Get 10% off your first order</p>

        <form>
          <input type="email" placeholder="Enter your email" />
          <span>
            <IoSend />
          </span>
        </form>
      </div>

      <div className="support footerItem">
        <h3>Support</h3>
        <h4>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h4>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>

      <div className="account footerItem">
        <h3>Account</h3>
        <p>My Account</p>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>

      <div className="quickLink footerItem">
        <h3>Quick Link</h3>
        <p>Privacy Policy</p>
        <p>Terms Of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
    </FooterPar>
  );
}

const FooterPar = styled.footer`
  left: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 140px;
  padding: 80px 135px;
  background: rgb(0, 0, 0);
  gap: 20px;

  @media screen and (max-width: 1210px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 80px 110px;
    gap: 59px;
  }

  @media screen and (max-width: 1210px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 50px 50px;
    gap: 59px;
  }

  @media screen and (max-width: 530px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 50px 30px;

  }

  .footerItem {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    h3 {
      color: rgb(250, 250, 250);
      font-family: "Inter", sans-serif;
      font-size: 24px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 3%;

      @media screen and (max-width: 1340px) {
        font-size: 22px;
      }
    }

    h4 {
      color: rgb(250, 250, 250);
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      @media screen and (max-width: 1340px) {
        font-size: 12px !important;
      }
    }

    p {
      color: rgb(250, 250, 250);
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      @media screen and (max-width: 1340px) {
        font-size: 14px;
      }
    }

    form {
      position: relative;
      width: 217px;
      input {
        box-sizing: border-box;
        border: 1.5px solid rgb(250, 250, 250);
        border-radius: 4px;
        outline: none;
        padding: 12px 16px;
        width: 100%;
        background: rgb(0, 0, 0);
        color: rgb(250, 250, 250);
      }

      span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 15px;
        color: rgb(250, 250, 250);
        font-size: 20px;
        cursor: pointer;
      }
    }
  }

  .support {
    h4 {
      font-size: 16px;
    }
  }
`;
