import { useParams, Link } from "react-router-dom";
import Style from "./Book.style";
import Book from "../components/book";
import Common from "../components/common";
import useBook from "../hooks/useBook";
import { IBook } from "../models/book.model";
import { formatCount, formatDate, formatPrice } from "../utils/format";

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
    filter: (book: IBook) => `${formatPrice(book.price)}`,
  },
  {
    label: "남은 수량",
    key: "count",
    filter: (book: IBook) => `${formatCount(book.count)}`,
  },
];

export default function BookPage() {
  const { bookID } = useParams();
  const { book, handleLike } = useBook(Number(bookID));

  if (!book) return null;

  return (
    <Style.Container>
      <Style.Section>
        <Style.LeftSection>
          <Common.Image imgID={book.imgID} size="large" alt={book.title} />
        </Style.LeftSection>

        <Style.RightSection>
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

          <p>{book.summary}</p>

          <Style.Buttons>
            <Book.LikeButton book={book} onClick={() => handleLike()} />
            <Book.AddtoCart book={book} />
          </Style.Buttons>
        </Style.RightSection>
      </Style.Section>

      <Common.Tabs>
        <Common.Tab title="상세 설명">
          <Common.ExpandBox $limit={4} $isExpand={false}>
            {book.detail}
          </Common.ExpandBox>
        </Common.Tab>

        <Common.Tab title="목차">
          <Common.ExpandBox $limit={4} $isExpand={false}>
            {book.contents}
          </Common.ExpandBox>
        </Common.Tab>
      </Common.Tabs>
    </Style.Container>
  );
}
