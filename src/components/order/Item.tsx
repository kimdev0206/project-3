import Common from "../common";
import { IOrderListItem } from "../../models/order.model";
import { formatDate, formatPrice } from "../../utils/format";

interface Props {
  order: IOrderListItem;
  isOpen: boolean;
  onOpen: (isOpen: boolean) => void;
  onSelect: (id: number) => void;
}

export default function Item({ order, isOpen, onOpen, onSelect }: Props) {
  const handleClick = () => {
    onSelect(order.orderID);
    onOpen(!isOpen);
  };

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
        <Common.Button size="small" state="normal" onClick={handleClick}>
          자세히
        </Common.Button>
      </td>
    </tr>
  );
}
