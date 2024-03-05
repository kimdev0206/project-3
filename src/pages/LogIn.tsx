import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { logIn } from "../apis/users.api";
import Common from "../components/common";
import { useAlert } from "../hooks/useAlert";
import { Props, Style } from "./SignUp";
import { useUsersStore } from "../stores/users.store";

export default function LogInPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>();
  const alert = useAlert();
  const { setLoggedIn } = useUsersStore();

  const onSubmit = async (props: Props) => {
    const response = await logIn(props);
    setLoggedIn(response.accessToken, response.refreshToken);

    alert(response.message);
    navigate("/");
  };

  return (
    <>
      <Common.Title size="large">로그인</Common.Title>

      <Style>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <Common.InputText
              size="medium"
              inputType="email"
              placeholder="이메일"
              {...register("email", { required: true })}
            />

            {errors.email && <p>이메일을 입력해주세요.</p>}
          </fieldset>

          <fieldset>
            <Common.InputText
              size="medium"
              inputType="password"
              placeholder="비밀번호"
              {...register("password", { required: true })}
            />

            {errors.email && <p>비밀번호를 입력해주세요.</p>}
          </fieldset>

          <fieldset>
            <Common.Button size="medium" state="normal" type="submit">
              로그인
            </Common.Button>
          </fieldset>

          <div className="info">
            <Link to="/users/reset-password">비밀번호 초기화</Link>
          </div>
        </form>
      </Style>
    </>
  );
}
