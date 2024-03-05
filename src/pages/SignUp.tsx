import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { signUp } from "../apis/users.api";
import Common from "../components/common";
import { useAlert } from "../hooks/useAlert";

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
  const navigate = useNavigate();
  const alert = useAlert();

  const onSubmit = async (props: Props) => {
    const response = await signUp(props);

    alert(response.message);
    navigate("/users/log-in");
  };

  return (
    <>
      <Common.Title size="large">회원가입</Common.Title>

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
