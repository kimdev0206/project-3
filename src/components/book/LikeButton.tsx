import styled from "styled-components";
import { GoHeartFill, GoHeart } from "react-icons/go";
import Button from "../common/Button";
import { IBook } from "../../models/book.model";

const Style = styled(Button)`
  display: flex;
  gap: 6px;
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
