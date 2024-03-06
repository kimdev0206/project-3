import { useEffect, useRef, useState } from "react";
import { isAxiosError } from "axios";
import { deleteCartBook, getCartBooks } from "../apis/cart-books.api";
import { useAlert } from "./useAlert";
import ICartBook from "../models/cart-book.model";

export default function useCartBooks() {
  const [cartBooks, setCartBooks] = useState<ICartBook[]>([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const isRendered = useRef(false);
  const alert = useAlert();

  const handleDelete = async (bookID: number) => {
    await deleteCartBook(bookID);
    setCartBooks(cartBooks.filter((cartBook) => cartBook.bookID !== bookID));
  };

  useEffect(() => {
    if (isRendered.current) return;

    getCartBooks()
      .then(({ data }) => {
        setCartBooks(data);
        setIsEmpty(!data.length);
      })
      .catch((error) => {
        if (isAxiosError(error)) {
          alert(error.response?.data.message);
        }
      });

    isRendered.current = true;
  }, []);

  return { cartBooks, isEmpty, handleDelete };
}
