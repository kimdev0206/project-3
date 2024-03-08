import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { IOrderListItem } from "../../models/order.model";
import { formatPrice } from "../../utils/format";

const Style = styled.table`
  width: 100%;
  border: ${({ theme }) => theme.border.default};
  border-collapse: collapse;
  text-align: center;

  tr {
    border-bottom: 1px solid #eee;
  }
  tr:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.color.primary};
  }
  th,
  td {
    padding: ${({ theme }) => theme.input.medium.padding};
  }

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    text-align: left;

    th,
    td {
      display: block;
    }
    th {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    td {
      position: relative;
      padding-left: 50%;
      border-bottom: 1px solid #eee;
    }

    td:before {
      position: absolute;
      left: 6px;
      font-weight: bold;
    }
    td:nth-of-type(1):before {
      content: "주문ID";
    }
    td:nth-of-type(2):before {
      content: "주문일자";
    }
    td:nth-of-type(3):before {
      content: "주소";
    }
    td:nth-of-type(4):before {
      content: "수령인";
    }
    td:nth-of-type(5):before {
      content: "전화번호";
    }
    td:nth-of-type(6):before {
      content: "대표 도서명";
    }
    td:nth-of-type(7):before {
      content: "총 수량";
    }
    td:nth-of-type(8):before {
      content: "총 금액";
    }

    .selected td:before {
      content: "";
    }
    .selected td:nth-of-type(1):before {
      content: "도서ID";
    }
    .selected td:nth-of-type(2):before {
      content: "-";
    }
    .selected td:nth-of-type(3):before {
      content: "도서명";
    }
    .selected td:nth-of-type(4):before {
      content: "수량";
    }
    .selected td:nth-of-type(5):before {
      content: "금액";
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
            <Item order={order} onSelect={onSelect} />

            {selectedID === order.orderID && (
              <>
                <tr className="selected">
                  <th>도서ID</th>
                  <th colSpan={4}>-</th>
                  <th>도서명</th>
                  <th>수량</th>
                  <th>금액</th>
                  <th></th>
                </tr>

                {order.details?.map((detail) => (
                  <tr key={detail.bookID} className="selected">
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
