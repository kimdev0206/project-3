import httpClient from "./http";

export async function postLike(bookID: number) {
  const response = await httpClient.post<{ message: string }>(
    `/likes/${bookID}`
  );
  return response.data;
}

export async function deleteLike(bookID: number) {
  const response = await httpClient.delete<{ message?: string }>(
    `/likes/${bookID}`
  );
  return response.data;
}
