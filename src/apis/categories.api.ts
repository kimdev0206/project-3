import httpClient from "./http";
import ICategory from "../models/category.model";

interface Response {
  data: ICategory[];
}
export async function getCategories() {
  try {
    const response = await httpClient.get<Response>("/books/categories");
    return response.data;
  } catch (error) {
    return {
      data: [],
    };
  }
}
