import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Common from "../common";
import ViewSwitcher from "./ViewSwitcher";
import useCategories from "../../hooks/useCategories";

const Style = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.large};

  .categories {
    display: flex;
    gap: ${({ theme }) => theme.gap.small};
  }
`;

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
    <Style>
      <div className="categories">
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
      </div>

      <div className="new">
        <Common.Button
          size="medium"
          state={searchParams.get("isNew") ? "active" : "normal"}
          onClick={() => handleNew()}
        >
          신간
        </Common.Button>
      </div>

      <ViewSwitcher />
    </Style>
  );
}
