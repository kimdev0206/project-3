import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Common from ".";
import { ThemeProvider } from "../../contexts/theme.context";

describe("Common.Title 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    render(
      <ThemeProvider>
        <Common.Title size="large">제목</Common.Title>
      </ThemeProvider>
    );

    expect(screen.getByText("제목")).toBeInTheDocument();
  });

  it("size prop 적용", () => {
    const { container } = render(
      <ThemeProvider>
        <Common.Title size="large">제목</Common.Title>
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyle({ fontSize: "2rem" });
  });

  it("color prop 적용", () => {
    const { container } = render(
      <ThemeProvider>
        <Common.Title size="large" color="primary">
          제목
        </Common.Title>
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyle({ color: "black" });
  });
});
