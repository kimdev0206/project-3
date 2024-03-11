import httpClient from "./http";
import {
  IOrder,
  IOrderListItem,
  IOrderListItemDetail,
} from "../models/order.model";

export async function postOrder(params: IOrder) {
  const response = await httpClient.post<{ message: string }>(
    "/orders",
    params
  );
  return response.data;
}

export async function getOrders() {
  try {
    const response = await httpClient.get<{ data: IOrderListItem[] }>(
      "/orders"
    );
    return response.data;
  } catch (error) {
    return {
      data: [],
    };
  }
}

export async function getOrder(deliveryID: number) {
  const response = await httpClient.get<{ data: IOrderListItemDetail[] }>(
    `/orders/${deliveryID}`
  );
  return response.data;
}

export async function deleteOrder(deliveryID: number) {
  const response = await httpClient.delete<{ message?: string }>(
    `/orders/${deliveryID}`
  );
  return response.data;
}
