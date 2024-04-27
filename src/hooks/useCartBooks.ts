import { useEffect, useRef, useState } from "react";
import CartBooksAPI from "../apis/cart-books.api";
import ICartBook from "../models/cart-book.model";

export default function useCartBooks() {
  const [cartBooks, setCartBooks] = useState<ICartBook[]>([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const isRendered = useRef(false);

  const handleDelete = async (bookID: number) => {
    const response = await CartBooksAPI.deleteCartBook(bookID);

    if (response.status !== 204) return;

    setCartBooks(cartBooks.filter((cartBook) => cartBook.bookID !== bookID));
  };

  useEffect(() => {
    if (isRendered.current) return;

    CartBooksAPI.getCartBooks().then((data) => {
      setCartBooks(data);
      setIsEmpty(!data.length);
    });

    isRendered.current = true;
  }, []);

  return { cartBooks, isEmpty, handleDelete };
}
