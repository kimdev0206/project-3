import httpClient from "./http";
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

interface Response {
  data: IBookListItem[];
  meta: IPagination;
}

export async function getBooks(params: Params) {
  try {
    const response = await httpClient.get<Response>("/books", {
      params,
    });
    return response.data;
  } catch (error) {
    return {
      data: [],
      meta: {
        page: 1,
        count: 0,
      },
    };
  }
}

export async function getBook(bookID: number) {
  const response = await httpClient.get<{ data: IBook }>(`/books/${bookID}`);
  return response.data;
}
