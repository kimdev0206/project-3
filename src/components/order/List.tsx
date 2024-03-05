import React from "react";
import styled from "styled-components";
import Order from ".";
import { IOrderListItem } from "../../models/order.model";
import { formatPrice } from "../../utils/format";

const Style = styled.table`
  & {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.primary};
    border-collapse: collapse;

    th,
    td {
      text-align: center;
      padding: ${({ theme }) => theme.input.medium.padding};
      border-bottom: 1px solid ${({ theme }) => theme.color.primary};
    }
  }
`;

interface Props {
  orders: IOrderListItem[];
  selectedID: number | null;
  onSelect: (id: number) => void;
}

export default function List({ orders, selectedID, onSelect }: Props) {
  return (
    <Style>
      <thead>
        <tr>
          <th>주문ID</th>
          <th>주문일자</th>
          <th>주소</th>
          <th>수령인</th>
          <th>전화번호</th>
          <th>대표 도서명</th>
          <th>총 수량</th>
          <th>총 금액</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order) => (
          <React.Fragment key={order.orderID}>
            <Order.Item order={order} onSelect={onSelect} />

            {selectedID === order.orderID && (
              <>
                <tr>
                  <th>도서ID</th>
                  <th colSpan={4}>-</th>
                  <th>도서명</th>
                  <th>수량</th>
                  <th>금액</th>
                  <th></th>
                </tr>

                {order.details?.map((detail) => (
                  <tr key={detail.bookID}>
                    <td>{detail.bookID}</td>
                    <td colSpan={4}>-</td>
                    <td>{detail.author}</td>
                    <td>{detail.count}권</td>
                    <td>{formatPrice(detail.price)}원</td>
                    <td></td>
                  </tr>
                ))}
              </>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </Style>
  );
}
