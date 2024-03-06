import { useForm } from "react-hook-form";
import styled from "styled-components";
import Common from "../common";
import { IReviewForm } from "../../models/book.model";

const Style = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.small};

  fieldset {
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: ${({ theme }) => theme.gap.medium};
    margin: 0;
    padding: 0;
    border: 0;

    textarea {
      width: 100%;
      height: 100px;
    }

    textarea,
    select {
      font-size: ${({ theme }) => theme.input.medium.fontSize};
      padding: ${({ theme }) => theme.input.medium.padding};
      border-radius: ${({ theme }) => theme.borderRadius.default};
      border: 1px solid ${({ theme }) => theme.color.primary};
    }

    p {
      margin: 0;
      margin-right: auto;
    }
  }

  fieldset:last-child {
    flex-direction: row;
  }
`;

interface Props {
  onPost: (formData: IReviewForm) => void;
}

export default function Form({ onPost }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReviewForm>();

  return (
    <Style onSubmit={handleSubmit(onPost)}>
      <fieldset>
        <textarea {...register("review", { required: true })}></textarea>
      </fieldset>

      <fieldset>
        {errors.review && <p>리뷰를 입력해주세요.</p>}

        <select {...register("score", { required: true, valueAsNumber: true })}>
          {Array.from({ length: 5 }, (_, index) => (
            <option value={5 - index}>{5 - index}점</option>
          ))}
        </select>

        <Common.Button size="medium" state="normal" type="submit">
          작성하기
        </Common.Button>
      </fieldset>
    </Style>
  );
}
