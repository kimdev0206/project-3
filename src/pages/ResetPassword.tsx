import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postResetPassword, putResetPassword } from "../apis/users.api";
import Common from "../components/common";
import { useAlert } from "../hooks/useAlert";
import { Props, Style } from "./SignUp";

export default function ResetPasswordPage() {
  const [isRequested, setIsRequested] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>();
  const alert = useAlert();

  const onSubmit = async (props: Props) => {
    if (isRequested) {
      const response = await putResetPassword(props);
      alert(response.message);
      return navigate("/users/log-in");
    }

    await postResetPassword(props);
    setIsRequested(true);
  };

  return (
    <>
      <Common.Title size="large">비밀번호 초기화</Common.Title>

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
