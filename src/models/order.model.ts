export interface IOrder {
  mainBookTitle: string;
  books: {
    bookID: number;
    count: number;
    price: number;
    title: string;
    author: string;
  }[];
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
  seq: number;
  deliveryID: string;
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
