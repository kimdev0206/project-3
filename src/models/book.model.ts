export interface IBookPrice {
  price: number;
  discountedPrice?: number;
  discountRate?: number;
}

export interface IBookListItem extends IBookPrice {
  id: number;
  title: string;
  imgID: number;
  summary: string;
  author: string;
  likes: number;
}

export interface IBook extends IBookListItem {
  categoryID: number;
  category: string;
  form: string;
  isbn: string;
  detail: string;
  pages: number;
  contents: string;
  amount: number;
  liked?: boolean;
  publishedAt: string;
}
