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
  liked: boolean;
  pubDate: string;
}

export interface IReviewForm {
  review: string;
  score: number;
}

export interface IReview extends IReviewForm {
  id: number;
  userID: string;
  createdAt: string;
}
