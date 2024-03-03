import httpClient from "./http";
import { IOrder } from "../models/order.model";

export async function postOrder(params: IOrder) {
  const response = await httpClient.post<{ message: string }>(
    "/orders",
    params
  );
  return response.data;
}
