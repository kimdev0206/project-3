import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { View } from "./ViewSwitcher";
import { IBookListItem } from "../../models/book.model";
import { formatPrice } from "../../utils/format";
import { getImgSrc } from "../../utils/image";

const Style = styled.div<Pick<Props, "view">>`
  a {
    display: flex;
    flex-direction: ${({ view }) => (view === "grid" ? "column" : "row")};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    text-decoration: none;
  }

  .img {
    width: ${({ view }) => (view === "grid" ? "auto" : "160px")};

    img {
      width: 100%;
    }
  }

  .content {
    position: relative;
    flex: ${({ view }) => (view === "grid" ? 0 : 1)};
    padding: 16px;

    .title {
      margin: 0 0 12px 0;
    }
    .summary {
      margin: 0;
    }
    .price {
      position: absolute;
      bottom: 16px;
      left: 16px;
    }
    .likes {
      position: absolute;
      bottom: 16px;
      right: 16px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 16px;
      border: 1px solid ${({ theme }) => theme.color.border};
      border-radius: ${({ theme }) => theme.borderRadius.default};
    }
  }
`;

interface Props {
  book: IBookListItem;
  view: View;
}

export default function Item({ book, view }: Props) {
  return (
    <Style view={view}>
      <Link to={`/books/${book.id}`}>
        <div className="img">
          <img src={getImgSrc(book.imgID)} alt={book.title} />
        </div>

        <div className="content">
          <h2 className="title">{book.title}</h2>
          <p className="summary">{book.summary}</p>
          <p className="author">{book.author}</p>
          <div className="price">
            <b>{formatPrice(book.price)}원</b>
          </div>

          <div className="likes">
            <FaHeart />
            <span>{book.likes}</span>
          </div>
        </div>
      </Link>
    </Style>
  );
}
