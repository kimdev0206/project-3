import { useEffect, useState } from "react";
import OrdersAPI from "../apis/orders.api";
import { IOrderListItem } from "../models/order.model";

export default function useOrders() {
  const [orders, setOrders] = useState<IOrderListItem[]>([]);
  const [selectedID, setSelectedID] = useState<string | null>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleSelectID = async (deliveryID: string) => {
    const hasDetail = orders.filter(
      (order) => order.deliveryID === deliveryID
    )[0].details;

    if (hasDetail) {
      setSelectedID(deliveryID);
      return;
    }

    const data = await OrdersAPI.getOrder(deliveryID);
    setOrders(
      orders.map((order) => {
        if (order.deliveryID === deliveryID) {
          return { ...order, details: data };
        }

        return order;
      })
    );
    setSelectedID(deliveryID);
  };

  const handleDeleteID = async (deliveryID: string) => {
    const response = await OrdersAPI.deleteOrder(deliveryID);

    if (response.status !== 204) return;

    setOrders(orders.filter((order) => order.deliveryID !== deliveryID));
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
