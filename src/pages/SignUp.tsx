import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Common from "../components/common";
import useUsers from "../hooks/useUsers";

export const Style = styled.div`
  max-width: ${({ theme }) => theme.layout.width.small};
  margin: 0 auto;

  fieldset {
    border: 0;
  }

  input {
    width: 100%;
    box-sizing: border-box;
  }

  .info {
    text-align: center;
    padding: 16px 0 0;
  }
`;

export interface Props {
  email: string;
  password: string;
}

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>();
  const { handleSignUp } = useUsers();

  return (
    <>
      <Common.Title size="large">회원가입</Common.Title>

      <Style>
        <form onSubmit={handleSubmit(handleSignUp)}>
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
            <Common.Button size="medium" state="normal" type="submit">
              회원가입
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
