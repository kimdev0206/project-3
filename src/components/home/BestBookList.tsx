import styled from "styled-components";
import { IBookListItem } from "../../models/book.model";
import Common from "../common";
import BestBookItem from "./BestBookItem";

const Style = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.gap.medium};

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

interface Props {
  books: IBookListItem[];
}

export default function BestBookList({ books }: Props) {
  return (
    <>
      {!books.length ? (
        <Common.Empty>도서가 없습니다.</Common.Empty>
      ) : (
        <Style>
          {books.map((book, index) => (
            <BestBookItem book={book} index={index} key={book.id} />
          ))}
        </Style>
      )}
    </>
  );
}
