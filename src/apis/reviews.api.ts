import httpClient from "./http";
import { IReview, IReviewForm } from "../models/book.model";

export async function getReviews(bookID: number) {
  const response = await httpClient.get<{ data: IReview[] }>(
    `/reviews/${bookID}`
  );
  return response.data;
}

export async function postReview(bookID: number, params: IReviewForm) {
  const response = await httpClient.post<{ message: string }>(
    `/reviews/${bookID}`,
    params
  );
  return response.data;
}
