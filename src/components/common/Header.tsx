import styled from "styled-components";
import ThemeSwitcher from "../header/ThemeSwitcher";

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
  return (
    <Style>
      <h1>온라인 서점</h1>

      <nav className="category">
        <ul>
          {CATEGORY.map((category) => (
            <li key={category.id}>
              <a
                href={
                  !category.id ? "/books" : `/books?category-id=${category.id}`
                }
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="auth">
        <ul>
          <li>
            <a href="/log-in">로그인</a>
          </li>
          <li>
            <a href="/sign-in">회원가입</a>
          </li>
        </ul>
      </nav>

      <ThemeSwitcher />
    </Style>
  );
}
