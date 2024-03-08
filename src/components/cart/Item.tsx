import { useMemo } from "react";
import styled from "styled-components";
import CheckButton from "./CheckButton";
import Common from "../common";
import { useConfirm } from "../../hooks/useAlert";
import ICartBook from "../../models/cart-book.model";
import { formatPrice } from "../../utils/format";

const Style = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: ${({ theme }) => theme.input.medium.padding};
  border: ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.border.radius};

  .center {
    display: flex;
    flex-direction: column;
    flex: 1;

    h1 {
      line-height: 1;
      margin: 0;
      margin-bottom: 1rem;
    }

    p {
      padding-bottom: 0.25rem;
      margin: 0;
    }
  }
`;

interface Props {
  cartBook: ICartBook;
  checkedIDs: number[];
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function Item({
  cartBook,
  checkedIDs,
  onCheck,
  onDelete,
}: Props) {
  const isChecked = useMemo(
    () => checkedIDs.includes(cartBook.bookID),
    [checkedIDs, cartBook.bookID]
  );
  const confirm = useConfirm();

  const handleDelete = () =>
    confirm("정말 삭제하시겠습니까?", () => onDelete(cartBook.bookID));

  return (
    <Style>
      <CheckButton
        isChecked={isChecked}
        onCheck={() => onCheck(cartBook.bookID)}
      />

      <div className="center">
        <Common.Title size="medium">{cartBook.title}</Common.Title>

        <p className="summary">{cartBook.summary}</p>
        <p className="price">{formatPrice(cartBook.price)}원</p>
        <p className="count">{cartBook.count}권</p>
      </div>

      <Common.Button
        size="medium"
        state="normal"
        type="button"
        onClick={handleDelete}
      >
        장바구니 삭제
      </Common.Button>
    </Style>
  );
}
