import { Link, MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Empty from "./Empty";
import { ThemeProvider } from "../../contexts/theme.context";

describe("Empty 컴포넌트 테스트", () => {
  it("렌더 여부", () => {
    const { getByText } = render(
      <ThemeProvider>
        <Empty>이미지가 존재하지 않습니다.</Empty>
      </ThemeProvider>
    );

    expect(getByText("이미지가 존재하지 않습니다.")).toBeInTheDocument();
  });

  it("size prop 적용", () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Empty size="large">이미지가 존재하지 않습니다.</Empty>
      </ThemeProvider>
    );

    expect(getByRole("heading")).toHaveStyle({ fontSize: "2rem" });
  });

  it("description prop 적용", () => {
    const { getByRole } = render(
      <ThemeProvider>
        <MemoryRouter>
          <Empty description={<Link to="/books">전체 검색 결과로 이동</Link>}>
            검색 결과가 없습니다.
          </Empty>
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(
      getByRole("link", { name: "전체 검색 결과로 이동" })
    ).toBeInTheDocument();
  });
});
