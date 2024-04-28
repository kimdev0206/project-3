import { useSearchParams } from "react-router-dom";
import Style from "./ButtonFilter.style";
import Common from "../common";
import useCategories from "../../hooks/useCategories";

export default function ButtonFilter() {
  const { categories } = useCategories();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategory = (id: number | null) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (id) {
      newSearchParams.set("categoryID", id.toString());
    } else {
      newSearchParams.delete("categoryID");
    }

    setSearchParams(newSearchParams);
  };

  const handleNew = () => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (newSearchParams.get("isNew")) {
      newSearchParams.delete("isNew");
    } else {
      newSearchParams.set("isNew", true.toString());
    }

    setSearchParams(newSearchParams);
  };

  return (
    <Style.Container>
      <section>
        {categories.map((category) => {
          const isMatch =
            category.id === Number(searchParams.get("categoryID"));
          const hasCategoryID = category.id || searchParams.get("categoryID");

          return (
            <Common.Button
              size="medium"
              state={isMatch ? "active" : !hasCategoryID ? "active" : "default"}
              key={category.id}
              onClick={() => handleCategory(category.id)}
            >
              {category.category}
            </Common.Button>
          );
        })}
      </section>

      <section>
        <Common.Button
          size="medium"
          state={searchParams.get("isNew") ? "active" : "default"}
          onClick={() => handleNew()}
        >
          신간
        </Common.Button>
      </section>
    </Style.Container>
  );
}
