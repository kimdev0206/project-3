import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import ThemeSwitcher from "../header/ThemeSwitcher";
import { useUsersStore } from "../../stores/users.store";

const Style = styled.header`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.width.large};
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin: 0 auto;
  padding: 20px 0;
  border-bottom: ${({ theme }) => theme.border.default};

  a {
    text-decoration: none;
  }
  h1 {
    margin: 0;
  }
  header {
    display: flex;
    align-items: end;
    gap: ${({ theme }) => theme.gap.small};
  }
  nav {
    ul {
      display: flex;
      align-items: end;
      gap: ${({ theme }) => theme.gap.large};
      list-style: none;
      margin: 0;
      padding-left: 0px;

      li {
        a {
          font-size: ${({ theme }) => theme.input.large.fontSize};
        }
      }
    }
  }
`;

export default function Header() {
  const { isLoggedIn, setLoggedOut } = useUsersStore();

  return (
    <Style>
      <header>
        <h1>
          <Link to="/">온라인 서점</Link>
        </h1>

        <ThemeSwitcher />
      </header>

      <nav>
        {isLoggedIn ? (
          <ul>
            <li>
              <Link to="/books?view=grid">도서</Link>
            </li>

            <li>
              <Link to="/cart-books">장바구니</Link>
            </li>

            <li>
              <Link to="/orders">주문 내역</Link>
            </li>

            <Button size="medium" state="normal" onClick={setLoggedOut}>
              로그아웃
            </Button>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to={"/books?view=grid"}>도서</Link>
            </li>

            <li>
              <Link to="/users/log-in">로그인</Link>
            </li>

            <li>
              <Link to="/users/sign-up">회원가입</Link>
            </li>
          </ul>
        )}
      </nav>
    </Style>
  );
}
