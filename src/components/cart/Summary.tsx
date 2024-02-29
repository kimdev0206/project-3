import styled from "styled-components";
import Title from "../common/Title";
import { formatPrice } from "../../utils/format";

const Style = styled.div`
  width: 240px;
  padding: ${({ theme }) => theme.input.medium.padding};
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.default};

  dl {
    display: flex;
    justify-content: space-between;
  }
`;

interface Props {
  totalCount: number;
  totalPrice: number;
}

export default function Summary({ totalCount, totalPrice }: Props) {
  return (
    <Style>
      <Title size="medium">주문 요약</Title>

      <dl>
        <dt>총 수량</dt>
        <dd>
          <b>{totalCount}권</b>
        </dd>
      </dl>

      <dl>
        <dt>총 금액</dt>
        <dd>
          <b>{formatPrice(totalPrice)}원</b>
        </dd>
      </dl>
    </Style>
  );
}
