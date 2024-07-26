export interface IOrder {
  orderID: string;
  mainBookTitle: string;
  books: IOrderListItemDetail[];
  delivery: IDelivery;
  totalCount: number;
  totalPrice: number;
}

export interface IDelivery {
  address: string;
  receiver: string;
  contact: string;
}

export interface IOrderListItem extends Omit<IOrder, "delivery">, IDelivery {
  createdAt: string;
  details: IOrderListItemDetail[];
}

export interface IOrderListItemDetail {
  bookID: number;
  title: string;
  author: string;
  price: number;
  count: number;
}
