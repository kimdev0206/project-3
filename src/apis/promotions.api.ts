import { IPromotion } from "../models/promotion.model";

export default class PromotionsAPI {
  static async getPromotions() {
    const data: IPromotion[] = [
      {
        id: 1,
        title: "IT 카테고리 도서",
        discountRate: 0.3,
        startAt: "2024-05-01",
        endAt: "2024-05-31",
      },
      {
        id: 2,
        title: "구글 이메일 회원",
        discountRate: 0.1,
      },
    ];
    return data;
  }
}
