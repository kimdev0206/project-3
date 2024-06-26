import React from "react";
import styled from "styled-components";
import { Size } from "../../styles/theme";

const Style = styled.button<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.input[size].fontSize};
  padding: ${({ theme, size }) => theme.input[size].padding};
  color: ${({ theme, $state }) => theme.buttonState[$state].primary};
  background-color: ${({ theme, $state }) =>
    theme.buttonState[$state].background};
  border-color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.border.radius};
  cursor: pointer;
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size: Size;
  $state: string;
}

export default function Button({
  children,
  size,
  $state = "default",
  ...props
}: Props) {
  return (
    <Style size={size} $state={$state} {...props}>
      {children}
    </Style>
  );
}
