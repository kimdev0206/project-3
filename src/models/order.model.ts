export interface IOrder {
  mainBookTitle: string;
  books: {
    bookID: number;
    count: number;
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
