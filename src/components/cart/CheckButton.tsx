import styled from "styled-components";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const Style = styled.button`
  border: 0;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

interface Props {
  isChecked: boolean;
  onCheck: () => void;
}

export default function CheckButton({ isChecked, onCheck }: Props) {
  return (
    <Style onClick={onCheck}>
      {isChecked ? <FaRegCheckCircle /> : <FaRegCircle />}
    </Style>
  );
}
