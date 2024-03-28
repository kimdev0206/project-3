import { FaHeart } from "react-icons/fa";
import Style from "./Item.style";
import { View } from "./ViewSwitcher";
import Common from "../common";
import { IBookListItem } from "../../models/book.model";
import { formatPrice } from "../../utils/format";

export interface Props {
  book: IBookListItem;
  view: View;
}

export default function Item({ book, view }: Props) {
  return (
    <Style.Container view={view} to={`/books/${book.id}`}>
      <Style.TopSection view={view}>
        <Common.Image imgID={book.imgID} size="medium" alt={book.title} />
      </Style.TopSection>

      <Style.MiddleSection view={view}>
        <Common.Title size="medium">{book.title}</Common.Title>

        <p>{book.summary}</p>
        <span>{book.author}</span>
      </Style.MiddleSection>

      <Style.BottomSection view={view}>
        <strong>{formatPrice(book.price)} 원</strong>

        <Style.LikesButtonBox>
          <FaHeart />
          <span>{book.likes}</span>
        </Style.LikesButtonBox>
      </Style.BottomSection>
    </Style.Container>
  );
}
