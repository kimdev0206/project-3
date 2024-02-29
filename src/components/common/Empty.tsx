import React from "react";
import styled from "styled-components";
import Title from "./Title";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface Props {
  title: string;
  description?: React.ReactNode;
}

export default function Empty({ title, description }: Props) {
  return (
    <Style>
      <Title size="large">{title}</Title>

      <p>{description}</p>
    </Style>
  );
}
