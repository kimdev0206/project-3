import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Title from "./Title";
import { ThemeProvider } from "../../contexts/theme.context";

describe("Title 컴포넌트 테스트", () => {
  it("렌더 여부", () => {
    const { getByText } = render(
      <ThemeProvider>
        <Title size="large">제목</Title>
      </ThemeProvider>
    );

    expect(getByText("제목")).toBeInTheDocument();
  });

  it("size prop 적용", () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Title size="large">제목</Title>
      </ThemeProvider>
    );

    expect(getByRole("heading")).toHaveStyle({ fontSize: "2rem" });
  });

  it("color prop 적용", () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Title size="large" color="primary">
          제목
        </Title>
      </ThemeProvider>
    );

    expect(getByRole("heading")).toHaveStyle({ color: "black" });
  });
});
