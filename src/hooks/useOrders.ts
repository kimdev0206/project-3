import { useEffect, useState } from "react";
import OrdersAPI from "../apis/orders.api";
import { IOrderListItem } from "../models/order.model";

export default function useOrders() {
  const [orders, setOrders] = useState<IOrderListItem[]>([]);
  const [selectedID, setSelectedID] = useState<string | null>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleSelectID = async (orderID: string) => {
    const hasDetail = orders.filter((order) => order.orderID === orderID)[0]
      .details;

    if (hasDetail) {
      setSelectedID(orderID);
      return;
    }

    const data = await OrdersAPI.getOrder(orderID);
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

  const handleDeleteID = async (orderID: string) => {
    const response = await OrdersAPI.deleteOrder(orderID);

    if (response.status !== 204) return;

    setOrders(orders.filter((order) => order.orderID !== orderID));
  };

  useEffect(() => {
    OrdersAPI.getOrders()
      .then((data) => {
        setOrders(data);
        setIsEmpty(!data);
      })
      .catch(() => {
        setOrders([]);
        setIsEmpty(true);
      });
  }, []);

  return {
    orders,
    setOrders,
    selectedID,
    handleSelectID,
    handleDeleteID,
    isEmpty,
  };
}
