import Common from "../common";
import { IOrderListItem } from "../../models/order.model";
import { formatDate, formatPrice } from "../../utils/format";

interface Props {
  order: IOrderListItem;
  onSelect: (id: number) => void;
}

export default function Item({ order, onSelect }: Props) {
  return (
    <tr>
      <td>{order.orderID}</td>
      <td>{formatDate(order.createdAt, "YYYY.MM.DD")}</td>
      <td>{order.address}</td>
      <td>{order.receiver}</td>
      <td>{order.contact}</td>
      <td>{order.mainBookTitle}</td>
      <td>{order.totalCount}권</td>
      <td>{formatPrice(order.totalPrice)}원</td>
      <td>
        <Common.Button
          size="small"
          state="normal"
          onClick={() => onSelect(order.orderID)}
        >
          자세히
        </Common.Button>
      </td>
    </tr>
  );
}
