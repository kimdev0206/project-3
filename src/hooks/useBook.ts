import { useEffect, useState } from "react";
import { isAxiosError } from "axios";
import { fetchBook } from "../apis/books.api";
import { postCartBooks } from "../apis/cart-books.api";
import { postLike, deleteike } from "../apis/likes.api";
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

    try {
      if (book.liked) {
        await deleteike(book.id);
        setBook({ ...book, liked: false, likes: book.likes - 1 });
      } else {
        await postLike(book.id);
        setBook({ ...book, liked: true, likes: book.likes + 1 });
      }
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error.response?.data.message);
      }
    }
  };

  const handleAddtoCart = async (count: number) => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      return;
    }

    if (!book) return;

    try {
      await postCartBooks(book.id, { count });
      setIsAdded(true);
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error.response?.data.message);
      }
    }
  };

  useEffect(() => {
    if (!bookID) return;

    fetchBook(bookID).then(({ data }) => setBook(data));
  }, [bookID]);

  return { book, handleLike, handleAddtoCart, isAdded };
}
