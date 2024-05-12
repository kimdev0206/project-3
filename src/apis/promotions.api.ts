import { IPromotion } from "../models/promotion.model";

export default class PromotionsAPI {
  static url = process.env.REACT_APP_BASE_URL + "/promotions";

  static async getPromotions() {
    const response = await fetch(this.url, {
      method: "GET",
    });

    const { data }: { data: IPromotion[] } = await response.json();
    return data;
  }
}
