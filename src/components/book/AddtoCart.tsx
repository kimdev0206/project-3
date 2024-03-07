import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Common from "../common";
import useBook from "../../hooks/useBook";
import { IBook } from "../../models/book.model";

const Style = styled.div`
  position: relative;
  display: flex;
  align-items: end;
  gap: ${({ theme }) => theme.gap.small};

  input::-webkit-inner-spin-button {
    appearance: none;
  }

  .left {
    display: inline-flex;
    width: 50%;

    input {
      width: 100%;
    }
  }

  .right {
    margin-left: auto;
  }

  .added {
    position: absolute;
    right: 0;
    top: -70px;
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
      <div className="left">
        <Common.InputText
          size="medium"
          inputType="number"
          value={count}
          onChange={onChange}
        />

        <Common.Button
          size="medium"
          state="normal"
          onClick={() => setCount(count + 1)}
        >
          +
        </Common.Button>

        <Common.Button
          size="medium"
          state="normal"
          onClick={() => count > 1 && setCount(count - 1)}
        >
          -
        </Common.Button>
      </div>

      <div className="right">
        <Common.Button
          size="medium"
          state="normal"
          onClick={() => handleAddtoCart(count)}
        >
          장바구니 담기
        </Common.Button>
      </div>

      {isAdded && (
        <div className="added">
          <p>장바구니에 추가되었습니다.</p>
          <Link to="/cart-books">장바구니로 이동</Link>
        </div>
      )}
    </Style>
  );
}
