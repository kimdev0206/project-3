import React, { useState } from "react";
import Style from "./List.style";
import Header from "./Header";
import Item from "./Item";
import { IOrderListItem } from "../../models/order.model";
import { formatCount, formatPrice } from "../../utils/format";

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
    <Style.Table>
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

                {order.details?.map((detail) => (
                  <Style.Detail key={detail.bookID}>
                    <td>{detail.bookID}</td>
                    <td colSpan={4}></td>
                    <td>{detail.author}</td>
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
