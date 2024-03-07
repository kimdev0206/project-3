import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { Props as TabProps } from "./Tab";

const Style = styled.div`
  .header {
    display: flex;
    gap: ${({ theme }) => theme.gap.small};
    border-bottom: 1px solid ${({ theme }) => theme.color.primary};

    button {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
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
    <Style>
      <div className="header">
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
      </div>

      <div>{tabs[activeIndex]}</div>
    </Style>
  );
}
