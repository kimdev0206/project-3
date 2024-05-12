import { useEffect, useState } from "react";
import BooksAPI from "../apis/books.api";
import CartBooksAPI from "../apis/cart-books.api";
import LikesAPI from "../apis/likes.api";
import { useAlert } from "./useAlert";
import { IBook } from "../models/book.model";
import { useUsersStore } from "../stores/users.store";

export default function useBook(bookID: number | undefined) {
  const [book, setBook] = useState<IBook>();
  const [isAdded, setIsAdded] = useState(false);
  const alert = useAlert();
  const { isLoggedIn } = useUsersStore();

  const handleLike = async () => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      return;
    }

    if (!book) return;

    if (book.liked) {
      const response = await LikesAPI.deleteLike(book.id);

      if (response.status !== 204) return;

      setBook({ ...book, liked: false, likes: book.likes - 1 });
    } else {
      const response = await LikesAPI.postLike(book.id);

      if (response.status !== 201) return;

      setBook({ ...book, liked: true, likes: book.likes + 1 });
    }
  };

  const handleAddtoCart = async (count: number) => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      return;
    }

    if (!book) return;

    if (count > book.count) {
      alert("남은 수량이 부족합니다.");
      return;
    }

    const response = await CartBooksAPI.postCartBook(book.id, count);

    if (response.status !== 201) return;

    setIsAdded(true);
  };

  useEffect(() => {
    if (!bookID) return;

    if (!isLoggedIn) {
      BooksAPI.getBook(bookID).then((data) => setBook(data));
    } else {
      BooksAPI.getBookWithAuthorize(bookID).then((data) => setBook(data));
    }
  }, [bookID]);

  return { book, handleLike, handleAddtoCart, isAdded };
}
