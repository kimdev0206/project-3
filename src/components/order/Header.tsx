import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { IOrderListItem } from "../../models/order.model";

const handleCompare =
  (key: keyof IOrderListItem) => (a: IOrderListItem, b: IOrderListItem) => {
    if (typeof a[key] === "string" && typeof b[key] === "string")
      return (a[key] as string).localeCompare(b[key] as string);

    if (a[key] === b[key]) return 0;
    if (a[key] > b[key]) return 1;
    return -1;
  };

const items = [
  {
    label: "배송ID",
    key: "deliveryID",
    onCompare: handleCompare("deliveryID"),
  },
  {
    label: "주문일자",
    key: "createdAt",
    onCompare: handleCompare("createdAt"),
  },
  { label: "주소", key: "address", onCompare: handleCompare("address") },
  { label: "수령인", key: "receiver", onCompare: handleCompare("receiver") },
  { label: "전화번호", key: "contact", onCompare: handleCompare("contact") },
  {
    label: "대표 도서명",
    key: "mainBookTitle",
    onCompare: handleCompare("mainBookTitle"),
  },
  {
    label: "총 수량",
    key: "totalCount",
    onCompare: handleCompare("totalCount"),
  },
  {
    label: "총 금액",
    key: "totalPrice",
    onCompare: handleCompare("totalPrice"),
  },
];

interface ISort {
  key: keyof IOrderListItem;
  direction: "DESC" | "ASC";
  onCompare: (a: IOrderListItem, b: IOrderListItem) => number;
}

interface Props {
  orders: IOrderListItem[];
  setOrders: (orders: IOrderListItem[]) => void;
}

export default function Header({ orders, setOrders }: Props) {
  const [configs, setConfigs] = useState<ISort[]>([]);

  const getOrders = (newConfigs: ISort[]) => {
    const newOrders = [...orders];

    return newOrders.sort((a: IOrderListItem, b: IOrderListItem) => {
      for (const config of newConfigs) {
        const compared = config.onCompare(a, b);

        if (compared) {
          if (config.direction === "ASC") return compared;
          else return -compared;
        }
      }

      return 0;
    });
  };

  const handleClick = (
    key: keyof IOrderListItem,
    onCompare: (a: IOrderListItem, b: IOrderListItem) => number
  ) => {
    let newConfigs = [...configs];
    const index = configs.findIndex((sort) => sort.key === key);

    if (index > -1) {
      const { direction } = newConfigs[index];
      newConfigs.splice(index, 1);

      if (direction === "DESC") {
        newConfigs = [...newConfigs, { key, direction: "ASC", onCompare }];
      }
    } else {
      newConfigs = [...newConfigs, { key, direction: "DESC", onCompare }];
    }

    setConfigs(newConfigs);
    setOrders(getOrders(newConfigs));
  };

  const getDirection = (key: keyof IOrderListItem) => {
    const config = configs.find((config) => config.key === key);

    if (!config) return;
    return config.direction === "DESC" ? <FaArrowDown /> : <FaArrowUp />;
  };

  return (
    <thead>
      <tr>
        {items.map((item) => (
          <th
            key={item.key}
            onClick={() =>
              handleClick(item.key as keyof IOrderListItem, item.onCompare)
            }
          >
            <p>{item.label}</p>
            <p>{getDirection(item.key as keyof IOrderListItem)}</p>
          </th>
        ))}
      </tr>
    </thead>
  );
}
