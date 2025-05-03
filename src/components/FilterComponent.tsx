import { styled } from "styled-components";

interface FilterComponentProps {
  filterFoo: (value: string) => void;
}

export default function FilterComponent({filterFoo} : FilterComponentProps) {

  return (
    <FilterParent>
      <div className="filterInput">
        <input
          onChange={(e) => filterFoo(e.target.value)}
          type="Text"
          placeholder="Filter..."
        />
      </div>
    </FilterParent>
  );
}

const FilterParent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

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
`;
