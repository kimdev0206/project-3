import { useEffect, useState } from "react";
import { IBookListItem } from "../models/book.model";
import BooksAPI from "../apis/books.api";

export default function useHome() {
  const [bestBooks, setBestBooks] = useState<IBookListItem[]>([]);
  const [newBooks, setNewBooks] = useState<IBookListItem[]>([]);

  useEffect(() => {
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
  }, []);

  return { bestBooks, newBooks };
}
