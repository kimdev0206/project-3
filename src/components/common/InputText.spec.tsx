import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputText from "./InputText";
import { ThemeProvider } from "../../contexts/theme.context";

describe("InputText 컴포넌트 테스트", () => {
  it("렌더 여부", () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider>
        <InputText size="large" placeholder="여기에 입력하세요." />
      </ThemeProvider>
    );

    expect(getByPlaceholderText("여기에 입력하세요.")).toBeInTheDocument();
  });

  it("size prop 적용", () => {
    const { getByRole } = render(
      <ThemeProvider>
        <InputText size="large" placeholder="여기에 입력하세요." />
      </ThemeProvider>
    );

    expect(getByRole("textbox")).toHaveStyle({ fontSize: "1.5rem" });
  });

  it("forwardRef 테스트", () => {
    const ref = React.createRef<HTMLInputElement>();

    render(
      <ThemeProvider>
        <InputText size="large" ref={ref} />
      </ThemeProvider>
    );

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
