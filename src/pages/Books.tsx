import { Link } from "react-router-dom";
import styled from "styled-components";
import Book from "../components/book";
import Common from "../components/common";
import useBooks from "../hooks/useBooks";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.large};
`;

export default function BooksPage() {
  const { books, pagination, isEmpty } = useBooks();

  return (
    <>
      <Common.Title size="large">도서 검색 결과</Common.Title>

      <Style>
        <Book.Filter />

        {!isEmpty && <Book.Pagination pagination={pagination} />}

        {isEmpty ? (
          <Common.Empty
            description={<Link to="/books">전체 검색 결과로 이동</Link>}
          >
            검색 결과가 없습니다.
          </Common.Empty>
        ) : (
          <Book.List books={books} />
        )}
      </Style>
    </>
  );
}
