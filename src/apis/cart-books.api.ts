import httpClient from "./http";

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
