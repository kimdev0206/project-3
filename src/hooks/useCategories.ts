import { useState } from "react";
import ICategory from "../models/category.model";

export default function useCategories() {
  const data = [
    { id: 1, category: "IT" },
    { id: 2, category: "건강" },
    { id: 3, category: "교육" },
  ];
  const [categories, setCategories] = useState<ICategory[]>([
    { id: null, category: "전체" },
    ...data,
  ]);

  return { categories };
}
