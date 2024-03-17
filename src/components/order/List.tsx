import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
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
  td:nth-of-type(9) {
    display: flex;
    gap: ${({ theme }) => theme.gap.small};
  }

  .selected * {
    color: ${({ theme }) => theme.color.background};
    background-color: ${({ theme }) => theme.color.primary};
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
      content: "배송ID";
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
  setOrders: (orders: IOrderListItem[]) => void;
  selectedID: number | null;
  onSelect: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function List({
  orders,
  setOrders,
  selectedID,
  onSelect,
  onDelete,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Style>
      <Header orders={orders} setOrders={setOrders} />

      <tbody>
        {orders.map((order) => (
          <React.Fragment key={order.deliveryID}>
            <Item
              order={order}
              isOpen={selectedID === order.deliveryID && isOpen}
              onOpen={setIsOpen}
              onSelect={onSelect}
              onDelete={onDelete}
            />

            {selectedID === order.deliveryID && isOpen && (
              <>
                <tr className="selected">
                  <th>도서ID</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>도서명</th>
                  <th>수량</th>
                  <th>금액</th>
                  <th></th>
                </tr>

                {order.details?.map((detail) => (
                  <tr key={detail.bookID} className="selected">
                    <td>{detail.bookID}</td>
                    <td colSpan={4}></td>
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
