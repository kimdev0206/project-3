import React from "react";
import styled from "styled-components";
import { InputSize } from "../../styles/theme";

const Style = styled.input<Props>`
  font-size: ${({ theme, size }) => theme.input[size].fontSize};

  padding: ${({ theme, size }) => theme.input[size].padding};

  color: ${({ theme, state }) => theme.buttonState[state].primary};
  background-color: ${({ theme, state }) =>
    theme.buttonState[state].background};

  border-color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: InputSize;
  state: string;
  value: string;
}

export default function Button({ size, state, value, ...props }: Props) {
  return <Style size={size} state={state} value={value} {...props} />;
}
