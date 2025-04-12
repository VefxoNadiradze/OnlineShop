import styled from "styled-components";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { ImMail } from "react-icons/im";

export default function Contact() {
  return (
    <ContactParent>
      <div className="contactItems">
        <div className="callItem">
          <div className="iconTitle">
            <span>
              <FaPhoneSquareAlt />
            </span>
            <p>Call To Us</p>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>
        <div className="messageItem">
          <div className="iconTitle">
            <span>
              <ImMail />
            </span>
            <p>Write To US</p>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
        </div>
      </div>
      <div className="formPar">
        <form>
          <div className="smallInputs">
            <input type="text" placeholder="Your Name *" />
            <input type="email" placeholder="Your Email *" />
            <input type="number" placeholder="Your Phone *" min={0} />
          </div>
          <textarea placeholder="Your Massage" className="TextArea" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </ContactParent>
  );
}

const ContactParent = styled.div`
  display: flex;
  align-items: center;
  margin: 140px 0;
  gap: 30px;
  @media screen and (max-width: 995px) {
    margin: 50px 0;
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column-reverse;
  }

  .contactItems {
    height: 457px;
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    border-radius: 4px;
    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
    background: rgb(255, 255, 255);
    padding: 40px 35px;
    @media screen and (max-width: 1300px) {
      width: 100%;
      height: auto;
    }
    div {
      .iconTitle {
        display: flex;
        align-items: center;
        column-gap: 16px;
        margin-bottom: 24px;
        p {
          color: rgb(0, 0, 0);
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
        }
        span {
          display: block;
          font-size: 35px;
          color: rgb(219, 68, 68);
        }
      }

      p {
        color: rgb(0, 0, 0);
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        margin-bottom: 10px;
        @media screen and (max-width: 1300px) {
          font-size: 13px;
        }
      }
    }
  }

  .formPar {
    width: 100%;
    padding: 40px 31px;
    border-radius: 4px;
    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
    background: rgb(255, 255, 255);
    @media screen and (max-width: 1300px) {
      display: flex;
      max-width: 100%;
      justify-content: center;
    }
    @media screen and (max-width: 800px) {
      width: 800px !important;
    }

    @media screen and (max-width: 550px) {
      padding: 30px 20px;
    }
    @media screen and (max-width: 380px) {
      padding: 20px 10px;
    }
    form {
      width: 100%;

      .smallInputs {
        display: flex;
        column-gap: 16px;
        @media screen and (max-width: 995px) {
          flex-direction: column;
          gap: 20px;
        }

        input {
          height: 50px;
          width: 235px;
          border-radius: 4px;
          background: rgb(245, 245, 245);
          font-family: "Poppins", sans-serif;
          padding: 13px 16px;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          border: none;
          outline: none;

          @media screen and (max-width: 1300px) {
            width: 100% !important;
          }
        }
      }
    }
    .TextArea {
      width: 100%;
      height: 207px !important;
      border-radius: 4px;
      background: rgb(245, 245, 245);
      padding: 13px 16px;
      margin-top: 32px;
      color: rgb(0, 0, 0);
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      outline: none;
      border: none;

      @media screen and (max-width: 1300px) {
        width: 100% !important;
      }
    }

    button {
      display: block;
      border-radius: 4px;
      background: rgb(219, 68, 68);
      color: rgb(250, 250, 250);
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      padding: 16px 48px;
      cursor: pointer;
      margin-top: 32px;
      margin-left: auto;
      border: none;

      @media screen and (max-width: 995px) {
        font-size: 14px;
        line-height: 20px;
        padding: 13px 30px;
      }
    }
  }
`;
