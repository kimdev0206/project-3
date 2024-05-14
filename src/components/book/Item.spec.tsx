import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Item from "./Item";
import { ThemeProvider } from "../../contexts/theme.context";
import { formatPrice } from "../../utils/format";

const book = {
  id: 1,
  title: "clarus provident altus",
  imgID: 1,
  summary:
    "Canonicus commemoro super ancilla cilicium cilicium viridis ullus aeternus architecto. Aperte desparatus custodia cruciamentum.",
  author: "Russell Ryan",
  price: 1000,
  discountedPrice: 600,
  discountRate: 0.3,
  likes: 1000,
  pubDate: "2023-11-03",
};

describe("Item 컴포넌트 테스트", () => {
  it("렌더 여부", () => {
    const { getByAltText, getByText } = render(
      <ThemeProvider>
        <Item book={book} $view="grid" />
      </ThemeProvider>
    );

    expect(getByAltText(book.title)).toBeInTheDocument();
    expect(getByText(book.title)).toBeInTheDocument();
    expect(getByText(book.summary)).toBeInTheDocument();
    expect(getByText(book.author)).toBeInTheDocument();
    expect(getByText(`${formatPrice(book.price)}원`)).toBeInTheDocument();
    expect(getByText(book.likes)).toBeInTheDocument();
  });
});
