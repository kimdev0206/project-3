import { useMemo } from "react";
import Style from "./Item.style";
import CheckButton from "./CheckButton";
import Common from "../common";
import { useConfirm } from "../../hooks/useAlert";
import ICartBook from "../../models/cart-book.model";
import { formatCount, formatPrice } from "../../utils/format";

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
    <Style.Container>
      <CheckButton
        isChecked={isChecked}
        onCheck={() => onCheck(cartBook.bookID)}
      />

      <Style.MiddleSection>
        <Common.Title size="medium">{cartBook.title}</Common.Title>

        <p>{cartBook.summary}</p>
        <span>{formatPrice(cartBook.price)}</span>
        <span>{formatCount(cartBook.count)}</span>
      </Style.MiddleSection>

      <Common.Button
        size="medium"
        state="normal"
        type="button"
        onClick={handleDelete}
      >
        장바구니 삭제
      </Common.Button>
    </Style.Container>
  );
}
