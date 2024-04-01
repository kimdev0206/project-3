import styled from "styled-components";
import Common from "../common";
import { formatCount, formatPrice } from "../../utils/format";

const Style = styled.div`
  width: 240px;
  padding: ${({ theme }) => theme.input.medium.padding};
  border: ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.border.radius};

  dl {
    display: flex;
    justify-content: space-between;

    dd {
      font-weight: bold;
    }
  }

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    width: auto;
  }
`;

interface Props {
  totalCount: number;
  totalPrice: number;
}

export default function Summary({ totalCount, totalPrice }: Props) {
  return (
    <Style>
      <Common.Title size="medium">주문 요약</Common.Title>

      <dl>
        <dt>총 수량</dt>
        <dd>{formatCount(totalCount)}</dd>
      </dl>

      <dl>
        <dt>총 금액</dt>
        <dd>{formatPrice(totalPrice)}</dd>
      </dl>
    </Style>
  );
}
