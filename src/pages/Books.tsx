import { Link } from "react-router-dom";
import styled from "styled-components";
import Empty from "../components/common/Empty";
import Filter from "../components/book/Filter";
import List from "../components/book/List";
import Pagination from "../components/book/Pagination";
import Title from "../components/common/Title";
import useBooks from "../hooks/useBooks";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default function Books() {
  const { books, pagination, isEmpty } = useBooks();

  return (
    <>
      <Title size="large">도서 검색 결과</Title>

      <Style>
        <Filter />

        {isEmpty ? (
          <Empty
            title="검색 결과가 없습니다."
            description={<Link to="/books">전체 검색 결과로 이동</Link>}
          />
        ) : (
          <List books={books} />
        )}
        {!isEmpty && <Pagination pagination={pagination} />}
      </Style>
    </>
  );
}
