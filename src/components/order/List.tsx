import React, { useState } from "react";
import Style from "./List.style";
import Header from "./Header";
import Item from "./Item";
import { IOrderListItem } from "../../models/order.model";
import { formatCount, formatPrice } from "../../utils/format";

interface Props {
  orders: IOrderListItem[];
  setOrders: (orders: IOrderListItem[]) => void;
  selectedID: string | null;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
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
    <Style.Table>
      <Header orders={orders} setOrders={setOrders} />

      <tbody>
        {orders.map((order) => (
          <React.Fragment key={order.orderID}>
            <Item
              order={order}
              isOpen={selectedID === order.orderID && isOpen}
              onOpen={setIsOpen}
              onSelect={onSelect}
              onDelete={onDelete}
            />

            {selectedID === order.orderID && isOpen && (
              <>
                <Style.Detail>
                  <th>도서ID</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>도서명</th>
                  <th>수량</th>
                  <th>금액</th>
                  <th></th>
                </Style.Detail>

                {order.details.map((detail) => (
                  <Style.Detail key={detail.bookID}>
                    <td>{detail.bookID}</td>
                    <td colSpan={4}></td>
                    <td>{detail.title}</td>
                    <td>{formatCount(detail.count)}</td>
                    <td>{formatPrice(detail.price)}</td>
                    <td></td>
                  </Style.Detail>
                ))}
              </>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </Style.Table>
  );
}
