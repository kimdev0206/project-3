import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Title from "./Title";
import { ThemeProvider } from "../../contexts/theme.context";

describe("Title 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    render(
      <ThemeProvider>
        <Title size="large">제목</Title>
      </ThemeProvider>
    );

    expect(screen.getByText("제목")).toBeInTheDocument();
  });

  it("size prop 적용", () => {
    const { container } = render(
      <ThemeProvider>
        <Title size="large">제목</Title>
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyle({ fontSize: "2rem" });
  });

  it("color prop 적용", () => {
    const { container } = render(
      <ThemeProvider>
        <Title size="large" color="primary">
          제목
        </Title>
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyle({ color: "black" });
  });
});
