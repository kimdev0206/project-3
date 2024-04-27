import { useEffect, useRef, useState } from "react";
import CategoriesAPI from "../apis/categories.api";
import ICategory from "../models/category.model";

export default function useCategories() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const isRendered = useRef(false);

  useEffect(() => {
    if (isRendered.current) return;

    CategoriesAPI.getCategories().then((data) =>
      setCategories([{ id: null, category: "전체" }, ...data])
    );

    isRendered.current = true;
  }, []);

  return { categories };
}
