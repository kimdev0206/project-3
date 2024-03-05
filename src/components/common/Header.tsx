import { Link } from "react-router-dom";
import styled from "styled-components";
import Common from ".";
import ThemeSwitcher from "../header/ThemeSwitcher";
import useCategories from "../../hooks/useCategories";
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
      gap: ${({ theme }) => theme.gap.large};
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
      gap: ${({ theme }) => theme.gap.medium};
      list-style: none;
      padding-left: 0px;

      li {
        a {
          font-size: ${({ theme }) => theme.input.medium.fontSize};
        }
      }
    }
  }
`;

export default function Header() {
  const { categories } = useCategories();
  const { isLoggedIn, setLoggedOut } = useUsersStore();

  return (
    <Style>
      <h1>
        <Link to="/">온라인 서점</Link>
      </h1>

      <nav className="category">
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                to={
                  !category.id
                    ? "/books"
                    : `/books?categoryID=${category.id}&view=grid`
                }
              >
                {category.category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="auth">
        {isLoggedIn ? (
          <ul>
            <li>
              <Link to="/cart-books">장바구니</Link>
            </li>
            <li>
              <Link to="/orders">주문 내역</Link>
            </li>
            <Common.Button size="medium" state="normal" onClick={setLoggedOut}>
              로그아웃
            </Common.Button>
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
