import React from "react";
import styled from "styled-components";
import { InputSize } from "../../styles/theme";

const Style = styled.button<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.input[size].fontSize};
  padding: ${({ theme, size }) => theme.input[size].padding};
  color: ${({ theme, state }) => theme.buttonState[state].primary};
  background-color: ${({ theme, state }) =>
    theme.buttonState[state].background};
  border-color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  cursor: pointer;
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: InputSize;
  state: string;
}

export default function Button({ children, size, state, ...props }: Props) {
  return (
    <Style size={size} state={state} {...props}>
      {children}
    </Style>
  );
}
