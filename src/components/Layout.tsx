import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  padding: 0 135px;
  @media screen and (max-width: 900px) {
    padding: 0 50px;
  }

  @media screen and (max-width: 622px) {
    padding: 0 20px 
  }

  @media screen and (max-width: 391px) {
    padding: 0 10px 

  }
`;
