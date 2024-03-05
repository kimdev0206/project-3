import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Book from ".";
import { View } from "./ViewSwitcher";
import { IBookListItem } from "../../models/book.model";

const Style = styled.div<{ view: View }>`
  display: grid;
  grid-template-columns: ${({ view }) =>
    view === "grid" ? "repeat(4, 1fr)" : "repeat(1, 1fr)"};
  gap: 24px;
`;

interface Props {
  books: IBookListItem[];
}

export default function List({ books }: Props) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return (
    <Style view={searchParams.get("view") as View}>
      {books?.map((book) => (
        <Book.Item
          book={book}
          view={searchParams.get("view") as View}
          key={book.id}
        />
      ))}
    </Style>
  );
}
