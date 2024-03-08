import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Item from "./Item";
import { View } from "./ViewSwitcher";
import { IBookListItem } from "../../models/book.model";

const Style = styled.div<{ view: View }>`
  display: grid;
  grid-template-columns: ${({ view }) =>
    view === "grid" ? "repeat(4, 1fr)" : "repeat(1, 1fr)"};
  gap: ${({ theme }) => theme.gap.large};

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    grid-template-columns: ${({ view }) => view === "grid" && "repeat(2, 1fr)"};
  }
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
        <Item
          book={book}
          view={searchParams.get("view") as View}
          key={book.id}
        />
      ))}
    </Style>
  );
}
