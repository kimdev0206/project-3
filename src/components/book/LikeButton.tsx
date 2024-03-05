import styled from "styled-components";
import { GoHeartFill, GoHeart } from "react-icons/go";
import Common from "../common";
import { IBook } from "../../models/book.model";

const Style = styled(Common.Button)`
  display: flex;
  gap: ${({ theme }) => theme.gap.small};
`;

interface Props {
  book: IBook;
  onClick: () => void;
}

export default function LikeButton({ book, onClick }: Props) {
  return (
    <Style size="medium" state="normal" onClick={onClick}>
      {book.liked ? <GoHeartFill /> : <GoHeart />}
      {book.likes}
    </Style>
  );
}
