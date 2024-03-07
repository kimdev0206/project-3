import { useEffect, useState } from "react";
import { IBookListItem } from "../models/book.model";
import { getBooks } from "../apis/books.api";

export default function useHome() {
  const [bestBooks, setBestBooks] = useState<IBookListItem[]>([]);
  const [newBooks, setNewBooks] = useState<IBookListItem[]>([]);

  useEffect(() => {
    getBooks({
      categoryID: undefined,
      isNew: false,
      isBest: true,
      page: 1,
      limit: 10,
    }).then(({ data }) => setBestBooks(data));

    getBooks({
      categoryID: undefined,
      isNew: true,
      isBest: false,
      page: 1,
      limit: 4,
    }).then(({ data }) => setNewBooks(data));
  }, []);

  return { bestBooks, newBooks };
}
