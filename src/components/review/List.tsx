import styled from "styled-components";
import Form from "./Form";
import Item from "./Item";
import { IReview, IReviewForm } from "../../models/book.model";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.medium};
`;

interface Props {
  reviews: IReview[];
  onPost: (formData: IReviewForm) => void;
}

export default function List({ reviews, onPost }: Props) {
  return (
    <Style>
      <Form onPost={onPost} />

      {reviews.map((review) => (
        <Item review={review} key={review.id} />
      ))}
    </Style>
  );
}
