import styled from "styled-components";
import Book from "../book";
import Common from "../common";
import { IBookListItem } from "../../models/book.model";

const Style = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.gap.large};

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

interface Props {
  books: IBookListItem[];
}

export default function NewBookList({ books }: Props) {
  return (
    <>
      {!books?.length ? (
        <Common.Empty>도서가 없습니다.</Common.Empty>
      ) : (
        <Style>
          {books.map((book) => (
            <Book.Item book={book} $view="grid" key={book.id} />
          ))}
        </Style>
      )}
    </>
  );
}
