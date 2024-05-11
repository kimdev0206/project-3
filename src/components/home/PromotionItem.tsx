import styled from "styled-components";
import Common from "../common";
import { IPromotion } from "../../models/promotion.model";
import { formatDate, formatDiscountRate } from "../../utils/format";

const Style = styled.div`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100%;
  flex-direction: column;
  text-align: center;
`;

interface Props {
  promotion: IPromotion;
}

export default function PromotionItem({ promotion }: Props) {
  return (
    <Style>
      <Common.Title size="large">{promotion.title}</Common.Title>
      <span>{formatDiscountRate(promotion.discountRate)}</span>
      <span>
        {promotion.startAt &&
          `${formatDate(promotion.startAt)} - ${formatDate(promotion.endAt!)}`}
      </span>
    </Style>
  );
}
