import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { IOrderListItem } from "../../models/order.model";

const handleCompare = (key: keyof THeader) => (a: THeader, b: THeader) => {
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

type THeader = Omit<IOrderListItem, "books" | "details">;

interface IConfig {
  key: keyof THeader;
  type: "DESC" | "ASC";
  onCompare: (a: THeader, b: THeader) => number;
}

interface Props {
  orders: IOrderListItem[];
  setOrders: (orders: IOrderListItem[]) => void;
}

export default function Header({ orders, setOrders }: Props) {
  const [configs, setConfigs] = useState<IConfig[]>([]);

  const getOrders = (newConfigs: IConfig[]) => {
    const newOrders = [...orders];

    return newOrders.sort((a: THeader, b: THeader) => {
      for (const config of newConfigs) {
        const compared = config.onCompare(a, b);

        if (compared) {
          if (config.type === "ASC") return compared;
          else return -compared;
        }
      }

      return 0;
    });
  };

  const handleClick = (
    key: keyof THeader,
    onCompare: (a: THeader, b: THeader) => number
  ) => {
    let newConfigs = [...configs];
    const index = configs.findIndex((sort) => sort.key === key);

    if (index > -1) {
      const { type } = newConfigs[index];
      newConfigs.splice(index, 1);

      if (type === "DESC") {
        newConfigs = [...newConfigs, { key, type: "ASC", onCompare }];
      }
    } else {
      newConfigs = [...newConfigs, { key, type: "DESC", onCompare }];
    }

    setConfigs(newConfigs);
    setOrders(getOrders(newConfigs));
  };

  const getType = (key: keyof THeader) => {
    const config = configs.find((config) => config.key === key);

    if (!config) return;
    return config.type === "DESC" ? <FaArrowDown /> : <FaArrowUp />;
  };

  return (
    <thead>
      <tr>
        {items.map((item) => (
          <th
            key={item.key}
            onClick={() =>
              handleClick(item.key as keyof THeader, item.onCompare)
            }
          >
            <p>{item.label}</p>
            <p>{getType(item.key as keyof THeader)}</p>
          </th>
        ))}
      </tr>
    </thead>
  );
}
