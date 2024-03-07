import styled from "styled-components";
import Book from "../book";
import { IBookListItem } from "../../models/book.model";

const Style = styled.div`
  ${Book.BookItemStyle} {
    .summary,
    .footer {
      display: none;
    }
  }

  position: relative;

  .index {
    position: absolute;
    top: -10px;
    left: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-weight: 700;
    font-style: italic;
    border: 1px solid ${({ theme }) => theme.color.border};
  }
`;

interface Props {
  book: IBookListItem;
  index: number;
}

export default function BestBookItem({ book, index }: Props) {
  return (
    <Style>
      <Book.Item book={book} view="grid" />

      <div className="index">{index + 1}</div>
    </Style>
  );
}
