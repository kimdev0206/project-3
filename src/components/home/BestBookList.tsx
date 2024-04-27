import styled from "styled-components";
import { IBookListItem } from "../../models/book.model";
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
    <Style>
      {books?.map((book, index) => (
        <BestBookItem book={book} index={index} key={book.id} />
      ))}
    </Style>
  );
}
