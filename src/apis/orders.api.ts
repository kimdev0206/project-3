import AuthorizeInterceptor from "../interceptors/authorize.interceptor";
import {
  IOrder,
  IOrderListItem,
  IOrderListItemDetail,
} from "../models/order.model";

export default class OrdersAPI {
  static url = process.env.REACT_APP_BASE_URL + "/orders";

  static async postOrder(deliveryID: string, params: IOrder) {
    const response = await AuthorizeInterceptor.fetch(
      `${this.url}/${deliveryID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      }
    );

    const { message } = await response.json();
    return { status: response.status, message };
  }

  static async getOrders() {
    const response = await AuthorizeInterceptor.fetch(this.url, {
      method: "GET",
    });

    const { data }: { data: IOrderListItem[] } = await response.json();
    return data;
  }

  static async getOrder(deliveryID: string) {
    const response = await AuthorizeInterceptor.fetch(
      `${this.url}/${deliveryID}`,
      { method: "GET" }
    );

    const { data }: { data: IOrderListItemDetail[] } = await response.json();
    return data;
  }

  static async deleteOrder(deliveryID: string) {
    const response = await AuthorizeInterceptor.fetch(
      `${this.url}/${deliveryID}`,
      { method: "DELETE" }
    );

    return { status: response.status };
  }
}
