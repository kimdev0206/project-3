export interface IPromotion {
  id: number;
  title: string;
  discountRate: number;
  startAt?: string;
  endAt?: string;
}
