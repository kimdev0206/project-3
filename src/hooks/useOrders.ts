import { useEffect, useRef, useState } from "react";
import { getOrder, getOrders } from "../apis/orders.api";
import { IOrderListItem } from "../models/order.model";

export default function useOrders() {
  const [orders, setOrders] = useState<IOrderListItem[]>([]);
  const [selectedID, setSelectedID] = useState<number | null>(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const isRendered = useRef(false);

  const handleSelectID = async (orderID: number) => {
    const hasDetail = orders.filter((order) => order.orderID === orderID)[0]
      .details;

    if (hasDetail) {
      setSelectedID(orderID);
      return;
    }

    const { data } = await getOrder(orderID);
    setOrders(
      orders.map((order) => {
        if (order.orderID === orderID) {
          return { ...order, details: data };
        }

        return order;
      })
    );
    setSelectedID(orderID);
  };

  useEffect(() => {
    if (isRendered.current) return;

    getOrders().then(({ data }) => {
      setOrders(data);
      setIsEmpty(!data.length);
    });

    isRendered.current = true;
  }, []);

  return { orders, selectedID, handleSelectID, isEmpty };
}
