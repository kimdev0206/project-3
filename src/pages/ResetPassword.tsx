import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postResetPassword, putResetPassword } from "../apis/users.api";
import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import Title from "../components/common/Title";
import { useAlert } from "../hooks/useAlert";
import { Style } from "./SignUp";

export interface Props {
  email: string;
  password: string;
}

export default function ResetPassword() {
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
      <Title size="large">비밀번호 초기화</Title>

      <Style>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText
              size="medium"
              inputType="email"
              placeholder="이메일"
              {...register("email", { required: true })}
            />

            {errors.email && <p>이메일을 입력해주세요.</p>}
          </fieldset>

          {isRequested && (
            <fieldset>
              <InputText
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
              <Button size="medium" value="비밀번호 초기화" type="submit" />
            </fieldset>
          ) : (
            <fieldset>
              <Button size="medium" value="초기화 요청" type="submit" />
            </fieldset>
          )}
        </form>
      </Style>
    </>
  );
}
