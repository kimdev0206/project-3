import httpClient from "./http";
import ICategory from "../models/category.model";

export async function getCategories() {
  try {
    const response = await httpClient.get<{ data: ICategory[] }>(
      "/categories"
    );
    return response.data;
  } catch (error) {
    return {
      data: [],
    };
  }
}
