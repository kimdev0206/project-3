import { useEffect, useState } from "react";
import { IBookListItem } from "../models/book.model";
import { IPromotion } from "../models/promotion.model";
import BooksAPI from "../apis/books.api";
import PromotionsAPI from "../apis/promotions.api";

export default function useHome() {
  const [bestBooks, setBestBooks] = useState<IBookListItem[]>([]);
  const [newBooks, setNewBooks] = useState<IBookListItem[]>([]);
  const [promotions, setPromotions] = useState<IPromotion[]>([]);

  useEffect(() => {
    BooksAPI.getBooks({
      isBest: true,
      page: 1,
      limit: 10,
    })
      .then(({ data }) => setBestBooks(data))
      .catch(() => setBestBooks([]));

    BooksAPI.getBooks({
      isNew: true,
      page: 1,
      limit: 4,
    })
      .then(({ data }) => setNewBooks(data))
      .catch(() => setBestBooks([]));

    PromotionsAPI.getPromotions()
      .then((data) => setPromotions(data))
      .catch(() => setBestBooks([]));
  }, []);

  return { bestBooks, newBooks, promotions };
}
