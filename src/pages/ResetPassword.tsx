import { useForm } from "react-hook-form";
import Common from "../components/common";
import useUsers from "../hooks/useUsers";
import { Props, Style } from "./SignUp";

export default function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>();
  const { handleResetPassword, isRequested } = useUsers();

  return (
    <>
      <Common.Title size="large">비밀번호 초기화</Common.Title>

      <Style>
        <form onSubmit={handleSubmit(handleResetPassword)}>
          <fieldset>
            <Common.InputText
              size="medium"
              inputType="email"
              placeholder="이메일"
              {...register("email", { required: true })}
            />

            {errors.email && <p>이메일을 입력해주세요.</p>}
          </fieldset>

          {isRequested && (
            <fieldset>
              <Common.InputText
                size="medium"
                inputType="password"
                placeholder="비밀번호"
                {...register("password", { required: true })}
              />

              {errors.email && <p>비밀번호를 입력해주세요.</p>}
            </fieldset>
          )}

          {isRequested ? (
            <fieldset>
              <Common.Button size="medium" state="normal" type="submit">
                비밀번호 초기화
              </Common.Button>
            </fieldset>
          ) : (
            <fieldset>
              <Common.Button size="medium" state="normal" type="submit">
                초기화 요청
              </Common.Button>
            </fieldset>
          )}
        </form>
      </Style>
    </>
  );
}
