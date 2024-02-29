import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";
import InputText from "../common/InputText";
import useBook from "../../hooks/useBook";
import { IBook } from "../../models/book.model";

const Style = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  input::-webkit-inner-spin-button {
    appearance: none;
  }

  .added {
    position: absolute;
    right: 0;
    top: -90px;
    padding: ${({ theme }) => theme.input.medium.padding};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    border: 1px solid ${({ theme }) => theme.color.primary};
    text-align: center;

    p {
      padding-bottom: 0.25rem;
      margin: 0;
    }
  }
`;

interface Props {
  book: IBook;
}

export default function AddtoCart({ book }: Props) {
  const [count, setCount] = useState<number>(1);
  const { handleAddtoCart, isAdded } = useBook(book.id);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCount(+event.target.value);

  return (
    <Style>
      <div>
        <InputText
          size="medium"
          inputType="number"
          value={count}
          onChange={onChange}
        />

        <Button
          size="medium"
          state="normal"
          type="button"
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>

        <Button
          size="medium"
          state="normal"
          type="button"
          onClick={() => count > 1 && setCount(count - 1)}
        >
          -
        </Button>
      </div>

      <Button
        size="medium"
        state="normal"
        type="button"
        onClick={() => handleAddtoCart(count)}
      >
        장바구니 담기
      </Button>

      {isAdded && (
        <div className="added">
          <p>장바구니에 추가되었습니다.</p>
          <Link to="/cart-books">장바구니로 이동</Link>
        </div>
      )}
    </Style>
  );
}
