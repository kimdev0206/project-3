import dayjs from "dayjs";
import Style from "./List.style";
import Common from "../common";
import { useAlert } from "../../hooks/useAlert";
import { IOrderListItem } from "../../models/order.model";
import { formatCount, formatDate, formatPrice } from "../../utils/format";

interface Props {
  order: IOrderListItem;
  isOpen: boolean;
  onOpen: (isOpen: boolean) => void;
  onSelect: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function Item({
  order,
  isOpen,
  onOpen,
  onSelect,
  onDelete,
}: Props) {
  const alert = useAlert();

  const handleDetail = () => {
    onSelect(order.deliveryID);
    onOpen(!isOpen);
  };

  const handleDelete = () => {
    if (dayjs().diff(dayjs(order.createdAt), "hour") > 3) {
      alert("주문을 취소할 수 없습니다.");
      return;
    }

    onDelete(order.deliveryID);
  };

  return (
    <tr>
      <td>{order.deliveryID}</td>
      <td>{formatDate(order.createdAt, "YYYY.MM.DD")}</td>
      <td>{order.address}</td>
      <td>{order.receiver}</td>
      <td>{order.contact}</td>
      <td>{order.mainBookTitle}</td>
      <td>{formatCount(order.totalCount)}</td>
      <td>{formatPrice(order.totalPrice)}</td>
      <Style.Buttons>
        <Common.Button
          size="small"
          $state={isOpen ? "active" : "default"}
          onClick={handleDetail}
        >
          자세히
        </Common.Button>
        <Common.Button size="small" $state="default" onClick={handleDelete}>
          취소
        </Common.Button>
      </Style.Buttons>
    </tr>
  );
}
