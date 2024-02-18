import styled from "styled-components";
import ThemeSwitcher from "../header/ThemeSwitcher";

const Style = styled.header`
  background-color: ${({ theme }) => theme.color.background};

  h1 {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export default function Header() {
  return (
    <Style>
      <h1>온라인 서점</h1>
      <ThemeSwitcher />
    </Style>
  );
}
