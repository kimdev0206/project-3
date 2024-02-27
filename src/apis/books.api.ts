import httpClient from "./http";
import { IBookListItem } from "../models/book.model";
import IPagination from "../models/pagination.model";

interface Params {
  categoryID?: number;
  isNew: boolean;
  page: number;
  limit: number;
}

interface Response {
  data: IBookListItem[];
  meta: IPagination;
}

export async function fetchBooks(params: Params) {
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
