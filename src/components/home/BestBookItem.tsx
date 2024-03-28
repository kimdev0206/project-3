import Style from "./BestBookItem.style";
import Book from "../book";
import { IBookListItem } from "../../models/book.model";

interface Props {
  book: IBookListItem;
  index: number;
}

export default function BestBookItem({ book, index }: Props) {
  return (
    <Style.Container>
      <Book.Item book={book} view="grid" />

      <Style.Index>{index + 1}</Style.Index>
    </Style.Container>
  );
}
