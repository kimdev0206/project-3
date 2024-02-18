import styled from "styled-components";
import { ColorKey, HeadingSize } from "../../styles/theme";

const Style = styled.h1<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.heading[size].fontSize};

  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.primary};
`;

interface Props {
  children: React.ReactNode;
  size: HeadingSize;
  color?: ColorKey;
}

export default function Title({ children, size, color }: Props) {
  return (
    <Style size={size} color={color}>
      {children}
    </Style>
  );
}
