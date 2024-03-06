import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCategories } from "../apis/categories.api";
import ICategory from "../models/category.model";

export default function useCategories() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const isRendered = useRef(false);
  const location = useLocation();

  const setActive = () => {
    const searchParams = new URLSearchParams(location.search);

    if (!searchParams.get("categoryID")) {
      setCategories((prevState) =>
        prevState.map((each) => {
          return {
            ...each,
            isActive: false,
          };
        })
      );
    } else {
      setCategories((prevState) =>
        prevState.map((each) => {
          return {
            ...each,
            isActive: each.id === Number(searchParams.get("categoryID")),
          };
        })
      );
    }
  };

  useEffect(() => {
    setActive();
  }, [location.search]);

  useEffect(() => {
    if (isRendered.current) return;

    getCategories().then(({ data }) =>
      setCategories([{ id: null, category: "전체" }, ...data])
    );

    isRendered.current = true;
  }, []);

  return { categories };
}
