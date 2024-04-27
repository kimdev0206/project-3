import ICategory from "../models/category.model";

export default class CategoriesAPI {
  static url = process.env.REACT_APP_BASE_URL + "/categories";

  static async getCategories() {
    const response = await fetch(this.url, {
      method: "GET",
    });

    const { data }: { data: ICategory[] } = await response.json();
    return data;
  }
}
