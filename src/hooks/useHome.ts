import { useEffect, useState } from "react";
import { IBookListItem } from "../models/book.model";
import { IPromotion } from "../models/promotion.model";
import BooksAPI from "../apis/books.api";
import PromotionsAPI from "../apis/promotions.api";
import { useUsersStore } from "../stores/users.store";

export default function useHome() {
  const [bestBooks, setBestBooks] = useState<IBookListItem[]>([]);
  const [newBooks, setNewBooks] = useState<IBookListItem[]>([]);
  const [promotions, setPromotions] = useState<IPromotion[]>([]);
  const { isLoggedIn } = useUsersStore();

  useEffect(() => {
    try {
      if (!isLoggedIn) {
        BooksAPI.getBooks({
          isBest: true,
          page: 1,
          limit: 10,
        }).then(({ data }) => setBestBooks(data));

        BooksAPI.getBooks({
          isNew: true,
          page: 1,
          limit: 4,
        }).then(({ data }) => setNewBooks(data));
      } else {
        BooksAPI.getBooksWithAuthorize({
          isBest: true,
          page: 1,
          limit: 10,
        }).then(({ data }) => setBestBooks(data));

        BooksAPI.getBooksWithAuthorize({
          isNew: true,
          page: 1,
          limit: 4,
        }).then(({ data }) => setNewBooks(data));
      }
    } catch {
      setBestBooks([]);
      setNewBooks([]);
    }

    PromotionsAPI.getPromotions()
      .then((data) => setPromotions(data))
      .catch(() => setPromotions([]));
  }, []);

  return { bestBooks, newBooks, promotions };
}
