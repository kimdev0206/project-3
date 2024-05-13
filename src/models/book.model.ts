export interface IBookListItem {
  id: number;
  title: string;
  imgID: number;
  summary: string;
  author: string;
  price: number;
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
  discountedPrice?: number;
  count: number;
  liked?: boolean;
  pubDate: string;
}
