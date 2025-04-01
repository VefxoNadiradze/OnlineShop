import styled from "styled-components";

export default function Contact() {
  return <ContactParent>
      <div className="contactItems">
          <div className="callItem"></div>
          <div className="messageItem"></div>
      </div>
     <form >
        <div className="smallInputs">

        </div>
        <input type="message" />
     </form>
     
  </ContactParent>;
}

const ContactParent = styled.div`
  display: flex;
`;
