import AuthorizeInterceptor from "../interceptors/authorize.interceptor";
import ICartBook from "../models/cart-book.model";

export default class CartBooksAPI {
  static url = process.env.REACT_APP_BASE_URL + "/cart-books";

  static async postCartBook(bookID: number, count: number) {
    const response = await AuthorizeInterceptor.fetch(this.url + `/${bookID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count }),
    });

    return { status: response.status };
  }

  static async getCartBooks() {
    const response = await AuthorizeInterceptor.fetch(this.url, {
      method: "GET",
    });

    const { data }: { data: ICartBook[] } = await response.json();
    return data;
  }

  static async deleteCartBook(bookID: number) {
    const response = await AuthorizeInterceptor.fetch(this.url + `/${bookID}`, {
      method: "DELETE",
    });

    return { status: response.status };
  }
}
