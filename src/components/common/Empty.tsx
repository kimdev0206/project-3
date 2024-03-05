import React from "react";
import styled from "styled-components";
import Common from ".";

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
      <Common.Title size="large">{title}</Common.Title>

      <p>{description}</p>
    </Style>
  );
}
