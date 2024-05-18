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
    const bestBooksParam = {
      isBest: true,
      page: 1,
      limit: 10,
    };

    const newBooksParam = {
      isNew: true,
      page: 1,
      limit: 4,
    };

    try {
      if (!isLoggedIn) {
        BooksAPI.getBooks(bestBooksParam).then((result) =>
          setBestBooks(result.data)
        );

        BooksAPI.getBooks(newBooksParam).then((result) =>
          setNewBooks(result.data)
        );
      } else {
        BooksAPI.getBooksWithAuthorize(bestBooksParam).then((result) =>
          setBestBooks(result.data)
        );

        BooksAPI.getBooksWithAuthorize(newBooksParam).then((result) =>
          setNewBooks(result.data)
        );
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
