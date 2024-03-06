import styled from "styled-components";
import Star from "./Star";
import { IReview } from "../../models/book.model";
import { formatDate } from "../../utils/format";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.medium};
  padding: ${({ theme }) => theme.input.medium.padding};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span:last-child {
      padding-left: ${({ theme }) => theme.gap.small};
    }
  }

  .content {
    p {
      margin: 0;
    }
  }
`;

interface Props {
  review: IReview;
}

export default function Item({ review }: Props) {
  return (
    <Style>
      <header className="header">
        <div>
          <span>{review.userID}</span>
          <Star score={review.score} />
        </div>

        <div>{formatDate(review.createdAt)}</div>
      </header>

      <div className="content">
        <p>{review.review}</p>
      </div>
    </Style>
  );
}
