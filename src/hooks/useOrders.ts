import { isAxiosError } from "axios";
import { useEffect, useRef, useState } from "react";
import { getOrder, getOrders, deleteOrder } from "../apis/orders.api";
import { IOrderListItem } from "../models/order.model";

export default function useOrders() {
  const [orders, setOrders] = useState<IOrderListItem[]>([]);
  const [selectedID, setSelectedID] = useState<number | null>(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const isRendered = useRef(false);

  const handleSelectID = async (deliveryID: number) => {
    const hasDetail = orders.filter(
      (order) => order.deliveryID === deliveryID
    )[0].details;

    if (hasDetail) {
      setSelectedID(deliveryID);
      return;
    }

    const { data } = await getOrder(deliveryID);
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

  const handleDeleteID = async (deliveryID: number) => {
    try {
      await deleteOrder(deliveryID);
      setOrders(orders.filter((order) => order.deliveryID !== deliveryID));
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error.response?.data.message);
      }
    }
  };

  useEffect(() => {
    if (isRendered.current) return;

    getOrders().then(({ data }) => {
      setOrders(data);
      setIsEmpty(!data.length);
    });

    isRendered.current = true;
  }, []);

  return { orders, selectedID, handleSelectID, handleDeleteID, isEmpty };
}
