import { useEffect, useState } from "react";
import CategoriesAPI from "../apis/categories.api";
import ICategory from "../models/category.model";

export default function useCategories() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    CategoriesAPI.getCategories().then((data) =>
      setCategories([{ id: null, category: "전체" }, ...data])
    );
  }, []);

  return { categories };
}
