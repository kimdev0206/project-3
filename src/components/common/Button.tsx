import styled from "styled-components";
import { ButtonSize } from "../../styles/theme";

const Style = styled.button<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.button[size].fontSize};

  padding: ${({ theme, size }) => theme.button[size].padding};

  color: ${({ theme }) => theme.color.primary};

  background-color: ${({ theme }) => theme.color.background};

  border-color: ${({ theme }) => theme.color.primary};

  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

interface Props {
  children: React.ReactNode;
  size: ButtonSize;
}

export default function Button({ children, size }: Props) {
  return <Style size={size}>{children}</Style>;
}
