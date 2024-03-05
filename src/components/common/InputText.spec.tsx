import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Common from ".";
import { ThemeProvider } from "../../contexts/theme.context";

describe("InputText 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    render(
      <ThemeProvider>
        <Common.InputText size="large" placeholder="여기에 입력하세요." />
      </ThemeProvider>
    );

    expect(
      screen.getByPlaceholderText("여기에 입력하세요.")
    ).toBeInTheDocument();
  });

  it("size prop 적용", () => {
    render(
      <ThemeProvider>
        <Common.InputText size="large" placeholder="여기에 입력하세요." />
      </ThemeProvider>
    );

    expect(screen.getByRole("textbox")).toHaveStyle({ fontSize: "1.5rem" });
  });

  it("forwardRef 테스트", () => {
    const ref = React.createRef<HTMLInputElement>();

    render(
      <ThemeProvider>
        <Common.InputText size="large" ref={ref} />
      </ThemeProvider>
    );

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
