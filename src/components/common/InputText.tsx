import React, { ForwardedRef } from "react";
import styled from "styled-components";
import { InputSize } from "../../styles/theme";

const Style = styled.input<Props>`
  font-size: ${({ theme, size }) => theme.input[size].fontSize};

  padding: ${({ theme, size }) => theme.input[size].padding};

  color: ${({ theme }) => theme.color.primary};

  border-color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size: InputSize;
  inputType?: "email" | "password" | "string" | "number";
  placeholder?: string;
}

export default React.forwardRef(
  (
    { size, inputType, placeholder, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Style
        size={size}
        type={inputType}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    );
  }
);
