import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { Props as TabProps } from "./Tab";

const Buttons = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.gap.small};
  border-bottom: ${({ theme }) => theme.border.default};

  button {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

interface Props {
  children: React.ReactNode;
}

export default function Tabs({ children }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = React.Children.toArray(
    children
  ) as React.ReactElement<TabProps>[];

  return (
    <>
      <Buttons>
        {tabs.map((tab, index) => (
          <Button
            size="large"
            state={activeIndex === index ? "active" : "normal"}
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            {tab.props.title}
          </Button>
        ))}
      </Buttons>

      <div>{tabs[activeIndex]}</div>
    </>
  );
}
