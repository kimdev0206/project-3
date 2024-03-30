import { Link } from "react-router-dom";
import Style from "./Books.style";
import Book from "../components/book";
import Common from "../components/common";
import useBooks from "../hooks/useBooks";

export default function BooksPage() {
  const { books, pagination, isEmpty } = useBooks();

  return (
    <Style.Container>
      <Style.TopSection>
        <Common.Title size="large">도서 검색 결과</Common.Title>
        <Book.ViewSwitcher />
      </Style.TopSection>

      <Style.MiddleSection>
        <Book.ButtonFilter />
      </Style.MiddleSection>

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
    </Style.Container>
  );
}
