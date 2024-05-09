import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { Size } from "../../styles/theme";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h1 {
    margin-bottom: 0;
  }
`;

interface Props {
  children: string;
  size?: Size;
  description?: React.ReactNode;
}

export default function Empty({ children, size, description }: Props) {
  return (
    <Style>
      <Title size={size ? size : "large"}>{children}</Title>

      <p>{description}</p>
    </Style>
  );
}
