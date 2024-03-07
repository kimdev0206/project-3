import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import Book from "../components/book";
import Common from "../components/common";
import useBook from "../hooks/useBook";
import { IBook } from "../models/book.model";
import { getImgSrc } from "../utils/image";
import { formatDate, formatPrice } from "../utils/format";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.large};

  header {
    display: flex;
    gap: ${({ theme }) => theme.gap.large};

    .right {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.gap.medium};

      dl {
        display: flex;
        margin: 0;

        dt {
          width: 80px;
        }
      }
      footer {
        margin-top: auto;
      }
    }
  }
`;

const items = [
  {
    label: "카테고리",
    key: "category",
    filter: (book: IBook) => (
      <Link to={`/books?categoryID=${book.categoryID}`}>{book.category}</Link>
    ),
  },
  { label: "포맷", key: "form" },
  { label: "작가", key: "author" },
  { label: "ISBN", key: "isbn" },
  { label: "쪽수", key: "pages" },
  {
    label: "출간일",
    key: "pubDate",
    filter: (book: IBook) => formatDate(book.pubDate),
  },
  {
    label: "가격",
    key: "price",
    filter: (book: IBook) => `${formatPrice(book.price)} 원`,
  },
];

export default function BookPage() {
  const { bookID } = useParams();
  const { book, handleLike } = useBook(Number(bookID));

  if (!book) return null;

  return (
    <Style>
      <header>
        <img src={getImgSrc(book.imgID)} alt={book.title} />

        <div className="right">
          <Common.Title size="large">{book.title}</Common.Title>

          {items.map((item) => (
            <dl key={item.key}>
              <dt>{item.label}</dt>
              <dd>
                {item.filter
                  ? item.filter(book)
                  : book[item.key as keyof IBook]}
              </dd>
            </dl>
          ))}

          <p className="summary">{book.summary}</p>

          <footer>
            <Book.LikeButton book={book} onClick={() => handleLike()} />
            <Book.AddtoCart book={book} />
          </footer>
        </div>
      </header>

      <Common.Tabs>
        <Common.Tab title="상세 설명">
          <Common.ExpandBox limit={4} $isExpand={false}>
            {book.detail}
          </Common.ExpandBox>
        </Common.Tab>

        <Common.Tab title="목차">
          <Common.ExpandBox limit={4} $isExpand={false}>
            {book.contents}
          </Common.ExpandBox>
        </Common.Tab>
      </Common.Tabs>
    </Style>
  );
}
