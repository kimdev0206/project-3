import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getBooks } from "../apis/books.api";
import { IBookListItem } from "../models/book.model";
import IPagination from "../models/pagination.model";

export default function useBooks() {
  const [books, setBooks] = useState<IBookListItem[]>([]);
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    count: 0,
  });
  const [isEmpty, setIsEmpty] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    getBooks({
      categoryID: searchParams.get("categoryID")
        ? Number(searchParams.get("categoryID"))
        : null,
      isNew: searchParams.get("isNew") ? true : false,
      isTitle: searchParams.get("isTitle") ? true : false,
      isSummary: searchParams.get("isSummary") ? true : false,
      isContents: searchParams.get("isContents") ? true : false,
      isDetail: searchParams.get("isDetail") ? true : false,
      page: searchParams.get("page") ? Number(searchParams.get("page")) : 1,
      limit: 8,
      keyword: searchParams.get("keyword"),
    }).then(({ data, meta }) => {
      setBooks(data);
      setPagination(meta);
      setIsEmpty(!data.length);
    });
  }, [location.search]);

  return { books, pagination, isEmpty };
}
