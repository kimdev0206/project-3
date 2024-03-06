import styled from "styled-components";
import Item from "./Item";
import { IReview } from "../../models/book.model";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.medium};
`;

interface Props {
  reviews: IReview[];
}

export default function List({ reviews }: Props) {
  return (
    <Style>
      {reviews.map((review) => (
        <Item review={review} key={review.id} />
      ))}
    </Style>
  );
}
