import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";
import { ThemeProvider } from "../../contexts/theme.context";

describe("Button 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    render(
      <ThemeProvider>
        <Button size="large">버튼</Button>
      </ThemeProvider>
    );

    expect(screen.getByText("버튼")).toBeInTheDocument();
  });

  it("size prop 적용", () => {
    render(
      <ThemeProvider>
        <Button size="large">버튼</Button>
      </ThemeProvider>
    );

    expect(screen.getByRole("button")).toHaveStyle({ fontSize: "1.5rem" });
  });
});
