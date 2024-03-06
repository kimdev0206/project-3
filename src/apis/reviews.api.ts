import httpClient from "./http";
import { IReview } from "../models/book.model";

export async function getReviews(bookID: number) {
  const response = await httpClient.get<{ data: IReview[] }>(
    `/reviews/${bookID}`
  );
  return response.data;
}
