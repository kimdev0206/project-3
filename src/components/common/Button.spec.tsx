import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";
import { ThemeProvider } from "../../contexts/theme.context";

describe("Button 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    const { getByDisplayValue } = render(
      <ThemeProvider>
        <Button size="large" state="normal" value="버튼" />
      </ThemeProvider>
    );

    expect(getByDisplayValue("버튼")).toBeInTheDocument();
  });

  it("size prop 적용", () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Button size="large" state="normal" value="버튼" type="button" />
      </ThemeProvider>
    );

    expect(getByRole("button")).toHaveStyle({ fontSize: "1.5rem" });
  });

  it("state prop 적용", () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Button size="large" state="active" value="버튼" type="button" />
      </ThemeProvider>
    );

    expect(getByRole("button")).toHaveStyle({ backgroundColor: "black" });
  });
});
