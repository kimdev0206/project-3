import React, { ForwardedRef } from "react";
import styled from "styled-components";
import { InputSize } from "../../styles/theme";

const Style = styled.input.attrs({ type: "text" })<Props>`
  font-size: ${({ theme, size }) => theme.input[size].fontSize};

  padding: ${({ theme, size }) => theme.input[size].padding};

  color: ${({ theme }) => theme.color.primary};

  border-color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

interface Props {
  size: InputSize;
  placeholder?: string;
}

export default React.forwardRef(
  ({ size, placeholder }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return <Style size={size} placeholder={placeholder} ref={ref} />;
  }
);
