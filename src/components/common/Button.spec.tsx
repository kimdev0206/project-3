import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";
import { ThemeProvider } from "../../contexts/theme.context";

describe("Button 컴포넌트 테스트", () => {
  it("렌더 여부", () => {
    const { getByText } = render(
      <ThemeProvider>
        <Button size="large" state="normal">
          버튼
        </Button>
      </ThemeProvider>
    );

    expect(getByText("버튼")).toBeInTheDocument();
  });

  it("size prop 적용", () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Button size="large" state="normal">
          버튼
        </Button>
      </ThemeProvider>
    );

    expect(getByRole("button")).toHaveStyle({ fontSize: "1.5rem" });
  });

  it("state prop 적용", () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Button size="large" state="active">
          버튼
        </Button>
      </ThemeProvider>
    );

    expect(getByRole("button")).toHaveStyle({ backgroundColor: "black" });
  });
});
