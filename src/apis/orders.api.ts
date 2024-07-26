import AuthorizeInterceptor from "../interceptors/authorize.interceptor";
import {
  IOrder,
  IOrderListItem,
  IOrderListItemDetail,
} from "../models/order.model";

export default class OrdersAPI {
  static url = process.env.REACT_APP_BASE_URL + "/orders";

  static async postOrder(params: IOrder) {
    const { orderID, ...body } = params;
    const response = await AuthorizeInterceptor.fetch(
      this.url + `/${orderID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
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

  static async getOrder(orderID: string) {
    const response = await AuthorizeInterceptor.fetch(
      this.url + `/${orderID}`,
      { method: "GET" }
    );

    const { data }: { data: IOrderListItemDetail[] } = await response.json();
    return data;
  }

  static async deleteOrder(orderID: string) {
    const response = await AuthorizeInterceptor.fetch(
      this.url + `/${orderID}`,
      { method: "DELETE" }
    );

    return { status: response.status };
  }
}
