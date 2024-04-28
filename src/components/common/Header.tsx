import { Link } from "react-router-dom";
import Style from "./Header.style";
import Button from "./Button";
import Title from "./Title";
import ThemeSwitcher from "../header/ThemeSwitcher";
import { useUsersStore } from "../../stores/users.store";

export default function Header() {
  const { isLoggedIn, setLoggedOut } = useUsersStore();

  return (
    <Style.Container>
      <Style.Logo>
        <Link to="/">
          <Title size="large">온라인 서점</Title>
        </Link>

        <ThemeSwitcher />
      </Style.Logo>

      <Style.Navigation>
        {isLoggedIn && (
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

            <Button size="medium" $state="default" onClick={setLoggedOut}>
              로그아웃
            </Button>
          </ul>
        )}

        {!isLoggedIn && (
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
      </Style.Navigation>
    </Style.Container>
  );
}
