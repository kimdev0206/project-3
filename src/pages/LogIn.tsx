import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Style from "./SignUp.style";
import Common from "../components/common";
import useDebounce from "../hooks/useDebounce";
import useUsers from "../hooks/useUsers";
import { Props } from "./SignUp";

export default function LogInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>();
  const { handleLogIn } = useUsers();
  const { debounced, isHandling } = useDebounce(handleLogIn);

  return (
    <>
      <Common.Title size="large">로그인</Common.Title>

      <Style.Form onSubmit={handleSubmit(debounced)}>
        <fieldset>
          <Common.InputText
            size="medium"
            inputType="email"
            placeholder="이메일"
            inputMode="email"
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
          <Common.Button
            size="medium"
            $state={isHandling ? "active" : "default"}
            type="submit"
            disabled={isHandling}
          >
            {isHandling ? "처리 중" : "로그인"}
          </Common.Button>
        </fieldset>

        <div>
          <Link to="/users/reset-password">비밀번호 초기화</Link>
        </div>
      </Style.Form>
    </>
  );
}
