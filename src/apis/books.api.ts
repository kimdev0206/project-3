import AuthorizeInterceptor from "../interceptors/authorize.interceptor";
import { IBookListItem, IBook } from "../models/book.model";
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
    const url = new URL(this.url);
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

  static async getBook(bookID: number) {
    const response = await AuthorizeInterceptor.fetch(this.url + `/${bookID}`, {
      method: "GET",
    });

    const { data }: { data: IBook } = await response.json();
    return data;
  }
}
