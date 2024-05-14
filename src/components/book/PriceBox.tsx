import styled from "styled-components";
import { IBookPrice } from "../../models/book.model";
import { formatDiscountRate, formatPrice } from "../../utils/format";

const Style = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  book: IBookPrice;
}

export default function PriceBox({ book }: Props) {
  return (
    <Style>
      {book.discountedPrice ? (
        <del>{formatPrice(book.price)}</del>
      ) : (
        <span>{formatPrice(book.price)}</span>
      )}

      <strong>
        {book.discountedPrice ? formatPrice(book.discountedPrice) : ""}
        {book.discountRate ? `(${formatDiscountRate(book.discountRate)})` : ""}
      </strong>
    </Style>
  );
}
