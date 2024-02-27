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
  align-items: center;

  margin: 0 auto;
  padding: 20px 0;

  border-bottom: 1px solid ${({ theme }) => theme.color.primary};

  a {
    text-decoration: none;
  }

  .category {
    ul {
      display: flex;
      gap: 32px;
      list-style: none;
      padding-left: 0px;

      li {
        a {
          font-size: 1.5rem;
        }
      }
    }
  }

  .auth {
    ul {
      display: flex;
      gap: 16px;
      list-style: none;
      padding-left: 0px;

      li {
        a {
          font-size: 1.5rem;
        }
      }
    }
  }
`;

const CATEGORY = [
  { id: null, name: "전체" },
  { id: 0, name: "동화" },
  { id: 1, name: "소설" },
  { id: 2, name: "사회" },
];

export default function Header() {
  const { isLoggedIn, setLoggedOut } = useUsersStore();

  return (
    <Style>
      <h1>
        <Link to="/">온라인 서점</Link>
      </h1>

      <nav className="category">
        <ul>
          {CATEGORY.map((category) => (
            <li key={category.id}>
              <Link
                to={
                  !category.id ? "/books" : `/books?category-id=${category.id}`
                }
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="auth">
        {isLoggedIn ? (
          <ul>
            <li>장바구니</li>
            <li>주문 내역</li>
            <Button
              size="medium"
              state="normal"              
              onClick={setLoggedOut}
            >
              로그아웃
            </Button>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/users/log-in">로그인</Link>
            </li>
            <li>
              <Link to="/users/sign-up">회원가입</Link>
            </li>
          </ul>
        )}
      </nav>

      <ThemeSwitcher />
    </Style>
  );
}
