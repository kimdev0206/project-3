import { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./AddtoCart.style";
import Common from "../common";
import useBook from "../../hooks/useBook";
import { IBook } from "../../models/book.model";

interface Props {
  book: IBook;
}

export default function AddtoCart({ book }: Props) {
  const [count, setCount] = useState<number>(1);
  const { handleAddtoCart, isAdded } = useBook(book.id);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCount(+event.target.value);

  return (
    <Style.Container>
      <Style.LeftSection>
        <Common.InputText
          size="medium"
          inputType="number"
          value={count}
          onChange={onChange}
        />

        <Common.Button
          size="medium"
          $state="default"
          onClick={() => setCount(count + 1)}
        >
          +
        </Common.Button>

        <Common.Button
          size="medium"
          $state="default"
          onClick={() => count > 1 && setCount(count - 1)}
        >
          -
        </Common.Button>
      </Style.LeftSection>

      <Style.RightSection>
        <Common.Button
          size="medium"
          $state="default"
          onClick={() => handleAddtoCart(count)}
        >
          장바구니 담기
        </Common.Button>
      </Style.RightSection>

      {isAdded && (
        <Style.Alert>
          <p>장바구니에 추가되었습니다.</p>
          <Link to="/cart-books">장바구니로 이동</Link>
        </Style.Alert>
      )}
    </Style.Container>
  );
}
