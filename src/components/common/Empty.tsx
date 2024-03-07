import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { Size } from "../../styles/theme";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface Props {
  title: string;
  size?: Size;
  description?: React.ReactNode;
}

export default function Empty({ title, size, description }: Props) {
  return (
    <Style>
      <Title size={size ? size : "large"}>{title}</Title>

      <p>{description}</p>
    </Style>
  );
}
