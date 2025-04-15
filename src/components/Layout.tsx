import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { fetchProducts } from "../redux/Data";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";

export default function Layout() {
  const { loading } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      {loading && (
        <Loading>
          <LoadingDiv className="loader"></LoadingDiv>
        </Loading>
      )}
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

const LoadingDiv = styled.div`
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    --c: no-repeat radial-gradient(farthest-side, #ffff 92%, #ffff);
    background:
      var(--c) 50% 0,
      var(--c) 50% 100%,
      var(--c) 100% 50%,
      var(--c) 0 50%;
    background-size: 12px 12px;
    animation: l12 1s infinite;
  }
  &::before {
    margin: 4px;
    filter: hue-rotate(45deg);
    background-size: 8px 8px;
    animation-timing-function: linear;
  }

  @keyframes l12 {
    100% {
      transform: rotate(0.5turn);
    }
  }
`;

const Loading = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #17263f;
  z-index: 1000;
`;

const Main = styled.main`
  padding: 0 135px;
  @media screen and (max-width: 900px) {
    padding: 0 50px;
  }

  @media screen and (max-width: 622px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 391px) {
    padding: 0 10px;
  }
`;
