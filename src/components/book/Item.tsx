import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { View } from "./ViewSwitcher";
import Common from "../common";
import { IBookListItem } from "../../models/book.model";
import { formatPrice } from "../../utils/format";

export const Style = styled(Link)<Pick<Props, "view">>`
  display: flex;
  flex-direction: ${({ view }) => (view === "grid" ? "column" : "row")};
  box-shadow: ${({ theme }) =>
    theme.name === "light"
      ? "0 0 4px rgba(0, 0, 0, 0.2)"
      : "0 0 4px rgba(255, 255, 255, 0.2)"};
  text-decoration: none;

  .img {
    width: ${({ theme, view }) =>
      view === "grid" ? "auto" : `${theme.img.small}px`};

    img {
      width: 100%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: ${({ view }) => (view === "grid" ? 0 : 1)};
    padding: ${({ theme }) => theme.input.medium.padding};

    h1,
    .summary {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .summary {
      -webkit-line-clamp: 4;
    }
    p {
      margin: 0;
    }
  }

  .footer {
    display: flex;
    flex-direction: ${({ view }) => (view === "grid" ? "row" : "column")};
    gap: ${({ theme, view }) => view === "list" && theme.gap.small};
    justify-content: ${({ view }) => view === "grid" && "space-between"};
    align-items: end;
    margin-top: auto;
    padding: ${({ theme }) => theme.input.medium.padding};

    .price {
      font-weight: bold;
    }

    .likes {
      display: inline-flex;
      align-items: center;
      gap: ${({ theme }) => theme.gap.small};
      padding: ${({ theme }) => theme.input.small.padding};
      border: ${({ theme }) => theme.border.default};
      border-radius: ${({ theme }) => theme.border.radius};
    }
  }
`;

interface Props {
  book: IBookListItem;
  view: View;
}

export default function Item({ book, view }: Props) {
  return (
    <Style view={view} to={`/books/${book.id}`}>
      <div className="img">
        <Common.Image imgID={book.imgID} size="medium" alt={book.title} />
      </div>

      <div className="content">
        <Common.Title size="medium">{book.title}</Common.Title>

        <p className="summary">{book.summary}</p>
        <p>{book.author}</p>
      </div>

      <div className="footer">
        <p className="price">{formatPrice(book.price)} 원</p>

        <div className="likes">
          <FaHeart />
          <span>{book.likes}</span>
        </div>
      </div>
    </Style>
  );
}
