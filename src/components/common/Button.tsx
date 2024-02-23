import React from "react";
import styled from "styled-components";
import { InputSize } from "../../styles/theme";

const Style = styled.input<Props>`
  font-size: ${({ theme, size }) => theme.input[size].fontSize};

  padding: ${({ theme, size }) => theme.input[size].padding};

  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.background};

  border-color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: InputSize;
  value: string;
}

export default function Button({ size, value, ...props }: Props) {
  return <Style size={size} value={value} {...props} />;
}
