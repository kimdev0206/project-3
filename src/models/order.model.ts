export interface IOrder {
  mainBookTitle: string;
  books: {
    bookID: number;
    count: number;
  }[];
  delivery: {
    address: string;
    receiver: string;
    contact: string;
  };
  totalCount: number;
  totalPrice: number;
}
