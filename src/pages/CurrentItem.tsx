import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../redux/Data";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import styled from "styled-components";

export default function CurrentItem() {
  const { id } = useParams();

  const { products } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const item = products.find((item) => item.id === Number(id));

  return (
    <ItemParent>
      <div className="itemImages">
        <div className="smallImagesPar">
          {item?.images.map((smallImg) => {
            return (
              <div className="smallImage">
                <img src={smallImg} alt="" />
              </div>
            );
          })}
        </div>

        <div className="bigImage">
          <img src={item?.images[0]} alt="" />
        </div>
      </div>

      <div className="description"></div>
    </ItemParent>
  );
}

const ItemParent = styled.div`
  .itemImages {
    display: flex;
    align-items: center;
    column-gap: 30px;
    margin-top: 180px;

    .smallImagesPar {
      display: flex;
      flex-direction: column;
      row-gap: 16px;

      .smallImage {
        width: 170px;
        height: 138px;
        border-radius: 4px;
        background: rgb(245, 245, 245);
        cursor: pointer;

        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }
    }

    .bigImage {
      width: 500px;
      height: 600px;
      border-radius: 4px;
      background: rgb(245, 245, 245);
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
`;
