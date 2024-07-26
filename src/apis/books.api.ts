import AuthorizeInterceptor from "../interceptors/authorize.interceptor";
import { IBookListItem, IBook } from "../models/book.model";
import ICartBook from "../models/cart-book.model";
import IPagination from "../models/pagination.model";

interface Params {
  categoryID?: number | null;
  isNew?: boolean;
  isBest?: boolean;
  isTitle?: boolean;
  isSummary?: boolean;
  isContents?: boolean;
  isDetail?: boolean;
  page: number;
  limit: number;
  keyword?: string | null;
}

export default class BooksAPI {
  static url = process.env.REACT_APP_BASE_URL + "/books";

  static async getBooks(params: Params) {
    let url = new URL(this.url);
    let searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
      if (value) searchParams.append(key, value);
    }

    url.search = searchParams.toString();

    const response = await fetch(url, {
      method: "GET",
    });

    const { data, meta }: { data: IBookListItem[]; meta: IPagination } =
      await response.json();
    return { data, meta };
  }

  static async getBooksWithAuthorize(params: Params) {
    let url = new URL(this.url + "/authorized");
    let searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
      if (value) searchParams.append(key, value);
    }

    url.search = searchParams.toString();

    const response = await AuthorizeInterceptor.fetch(url.toString(), {
      method: "GET",
    });

    const { data, meta }: { data: IBookListItem[]; meta: IPagination } =
      await response.json();
    return { data, meta };
  }

  static async getBook(bookID: number) {
    const response = await fetch(this.url + `/${bookID}`, {
      method: "GET",
    });

    const { data }: { data: IBook } = await response.json();
    return data;
  }

  static async getBookWithAuthorize(bookID: number) {
    const response = await AuthorizeInterceptor.fetch(
      this.url + `/${bookID}/authorized`,
      { method: "GET" }
    );

    const { data }: { data: IBook } = await response.json();
    return data;
  }

  static async postLike(bookID: number) {
    const response = await AuthorizeInterceptor.fetch(
      this.url + `/${bookID}/like`,
      {
        method: "POST",
      }
    );

    return { status: response.status };
  }

  static async deleteLike(bookID: number) {
    const response = await AuthorizeInterceptor.fetch(
      this.url + `/${bookID}/like`,
      {
        method: "DELETE",
      }
    );

    return { status: response.status };
  }

  static async postCartBook(bookID: number, count: number) {
    const response = await AuthorizeInterceptor.fetch(
      this.url + `/${bookID}/cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count }),
      }
    );

    return { status: response.status };
  }

  static async getCartBooks() {
    const response = await AuthorizeInterceptor.fetch(this.url + "/carts", {
      method: "GET",
    });

    const { data }: { data: ICartBook[] } = await response.json();
    return data;
  }

  static async deleteCartBook(bookID: number) {
    const response = await AuthorizeInterceptor.fetch(
      this.url + `/${bookID}/cart`,
      {
        method: "DELETE",
      }
    );

    return { status: response.status };
  }
}
