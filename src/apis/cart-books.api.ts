import httpClient from "./http";
import ICartBook from "../models/cart-book.model";

interface Params {
  count: number;
}

export async function postCartBooks(bookID: number, params: Params) {
  const response = await httpClient.post<{ message: string }>(
    `/cart-books/${bookID}`,
    params
  );
  return response.data;
}

export async function getCartBooks() {
  const response = await httpClient.get<{ data: ICartBook[] }>("/cart-books");
  return response.data;
}

export async function deleteCartBooks(bookID: number) {
  const response = await httpClient.delete<{ message?: string }>(
    `/cart-books/${bookID}`
  );
  return response.data;
}
