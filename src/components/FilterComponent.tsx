import { useState } from "react";
import { styled } from "styled-components";

interface FilterComponentProps {
  filterFoo: (value: string) => void;
  filterPrice: (value: { min: string; max: string }) => void;
}

export default function FilterComponent({
  filterFoo,
  filterPrice,
}: FilterComponentProps) {
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  function handleMinPrice(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setMinPrice(value);
    filterPrice({ min: value, max: maxPrice });
  }

  function handleMaxPrice(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setMaxPrice(value);
    filterPrice({ min: minPrice, max: value });
  }

  return (
    <FilterParent>
      <div className="filterInput">
        <input
          onChange={(e) => filterFoo(e.target.value)}
          type="Text"
          placeholder="Filter..."
        />
      </div>

      <div className="PriceInputs">
        <input
          onChange={handleMinPrice}
          type="number"
          placeholder="Min Price"
          min={0}
        />
        -
        <input
          onChange={handleMaxPrice}
          type="number"
          placeholder="Min Price"
          min={0}
        />
      </div>
    </FilterParent>
  );
}

const FilterParent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 20px;

  @media screen and (max-width: 700px){
    flex-direction: column;
    align-items: flex-start;
  }

  .filterInput {
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    input {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      outline: none;
      font-size: 16px;
      transition: all 0.3s ease-in-out;

      &:focus {
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
      }
    }
  }

  .PriceInputs {
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 10px;
    input {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      outline: none;
      font-size: 16px;
      transition: all 0.3s ease-in-out;

      &:focus {
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
      }
    }
  }
`;
