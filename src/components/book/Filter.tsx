import { useSearchParams } from "react-router-dom";
import Style from "./Filter.style";
import Common from "../common";
import ViewSwitcher from "./ViewSwitcher";
import useCategories from "../../hooks/useCategories";

export default function Filter() {
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
      <Style.Categories>
        {categories.map((category) => (
          <Common.Button
            size="medium"
            state={category.isActive ? "active" : "normal"}
            key={category.id}
            onClick={() => handleCategory(category.id)}
          >
            {category.category}
          </Common.Button>
        ))}
      </Style.Categories>

      <section>
        <Common.Button
          size="medium"
          state={searchParams.get("isNew") ? "active" : "normal"}
          onClick={() => handleNew()}
        >
          신간
        </Common.Button>
      </section>

      <ViewSwitcher />
    </Style.Container>
  );
}
